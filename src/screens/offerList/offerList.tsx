import {View, FlatList, TouchableOpacity} from 'react-native';
import React, {useCallback} from 'react';
import {styles} from './offerList.styles';
import {Offer} from '@components/offerTile/offerTile.types';
import {InputWithControl, OfferTile} from '@components';
import {BackArrow, Close, SearchIcon} from '@assets/svg';
import {useOfferListController} from './offerList.controller';
import {Colors} from '@utils';

const OfferList: React.FC = () => {
  const {control, fields, clearSearchText, onItemClick} =
    useOfferListController();

  const renderItem = useCallback(({item}: {item: Offer}) => {
    return <OfferTile item={item} onPress={() => onItemClick(item)} />;
  }, []);

  const renderSearchLeftIcon = useCallback(() => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        disabled={!fields.search?.trim()}
        onPress={clearSearchText}
        style={styles.searchLeftIconView}>
        {!fields.search?.trim() ? (
          <SearchIcon width={20} fill={Colors.Gray} />
        ) : (
          <BackArrow />
        )}
      </TouchableOpacity>
    );
  }, [fields.search]);

  const renderSearchRightIcon = () => {
    return (
      <TouchableOpacity
        disabled={!fields.search?.trim()}
        activeOpacity={0.8}
        onPress={clearSearchText}
        style={styles.searchRightIconView}>
        {!fields.search?.trim() ? <></> : <Close />}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <InputWithControl
        control={control}
        name="search"
        containerStyle={styles.searchInput}
        leftComponent={renderSearchLeftIcon}
        rightComponent={renderSearchRightIcon}
        placeholder="Search"
      />
      <FlatList
        data={fields.offerList}
        renderItem={renderItem}
        contentContainerStyle={styles.flatlist}
      />
    </View>
  );
};

export default OfferList;
