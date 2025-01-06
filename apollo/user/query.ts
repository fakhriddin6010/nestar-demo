import { gql } from "@apollo/client";

/*************************
 *   PROPERTY    *
 ************************/

export const GET_PROPERTIES = gql`
  query GetProperties($input: PropertiesInquiry!) {
    getProperties(input: $input) {
      list {
        _id
        propertyType
        propertyLocation
        propertyStatus
        propertyAddress
        propertyTitle
        propertyPrice
        propertySquare
        propertyBeds
        propertyRooms
        propertyViews
        propertyLikes
        propertyComments
        propertyRank
        propertyImages
        propertyDesc
        propertyBarter
        propertyRent
        memberId
        soldAt
        deletedAt
        constructedAt
        createdAt
        updatedAt
        memberData {
          _id
          memberType
          memberStatus
          memberAuthType
          memberPhone
          memberNick
          memberFulName
          memberImage
          memberAddress
          memberDesc
          memberProperties
          memberArticles
          memberFollowers
          memberFollowings
          memberPoints
          memberLikes
          memberViews
          memberComments
          memberRank
          memberWarnings
          memberBlocks
          deletedAt
          createdAt
          updatedAt
          accessToken
          meLiked {
            memberId
            likeRefId
            myFavorite
          }
          meFollowed {
            followingId
            followerId
            myFollowing
          }
        }
        meLiked {
          memberId
          likeRefId
          myFavorite
        }
      }
      metaCounter {
        total
      }
    }
  }
`;
