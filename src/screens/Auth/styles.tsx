import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  welcomeMessage: {
    marginTop: 13,
    fontSize: 16,
    fontFamily: 'PlayfairDisplay_400Regular_Italic',
    color: '#FFF',
  },
  header: {
    fontSize: 20,
    fontFamily: 'PTSans_700Bold',
    color: '#FFF',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 268,
    maxHeight: 57,
    minHeight: 57,
    backgroundColor: '#931332',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'PTSans_700Bold',
  },
  buttonAgeConfirm: {
    width: 97,
    height: 46,
    backgroundColor: '#FFF',
    borderRadius: 2,
    flexDirection: 'row',
    marginHorizontal: 21,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonAgeDeny: {
    width: 60,
    height: 40,
    backgroundColor: '#C23232',
    borderRadius: 2,
    flexDirection: 'row',
    marginHorizontal: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonConfirmText: {
    marginLeft: 8,
    fontFamily: 'PTSans_700Bold',
    color: '#45D09E',
  },
  buttonDenyText: {
    marginLeft: 11,
    fontFamily: 'PTSans_700Bold',
    color: '#E20338',
  },
  resendCode: {
    textDecorationLine: 'underline',
    fontSize: 16,
    color: '#FFF',
  },
  wrongCodeContainer: {
    position: 'absolute',
    top: -80,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 220,
    height: 45,
    backgroundColor: '#FFF',
    borderRadius: 50,
  },
  wrongCode: {
    color: '#E20338',
    fontSize: 16,
    fontFamily: 'PTSans_400Regular',
    marginLeft: 9,
  },
  unregUser: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    width: 316,
    maxHeight: 35,
  },
  goBackButton: {
    position: 'absolute',
    top: 56,
    left: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  goBackButtonText: {
    fontSize: 14,
    color: '#fff',
    fontFamily: 'PTSans_400Regular',
    marginLeft: 6,
  },
})

export default styles
