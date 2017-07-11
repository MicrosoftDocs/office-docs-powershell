---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015
schema: 2.0.0
---

# New-CsClientPolicy

## SYNOPSIS
Below Content Applies To: Lync Server 2010

Creates a new client policy.
Among other things, client policies help determine the features of Microsoft Lync 2010 that are made available to users; for example, you might give some users the right to transfer files while denying this right to other users.

Below Content Applies To: Lync Server 2013

Creates a new client policy.
Among other things, client policies help determine the features of Lync Server that are made available to users; for example, you might give some users the right to transfer files while denying this right to other users.
This cmdlet was introduced in Lync Server 2010.

Below Content Applies To: Skype for Business Online

New-CsClientPolicy \[-Identity\] \<XdsIdentity\> \[-Tenant \<guid\>\] \[-PolicyEntry \<pslistmodifier\>\] \[-Description \<string\>\] \[-AddressBookAvailability \<AddressBookAvailability\>\] \[-AttendantSafeTransfer \<bool\>\] \[-AutoDiscoveryRetryInterval \<timespan\>\] \[-BlockConversationFromFederatedContacts \<bool\>\] \[-CalendarStatePublicationInterval \<uint32\>\] \[-CustomizedHelpUrl \<string\>\] \[-CustomLinkInErrorMessages \<string\>\] \[-CustomStateUrl \<string\>\] \[-DGRefreshInterval \<timespan\>\] \[-DisableCalendarPresence \<bool\>\] \[-DisableContactCardOrganizationTab \<bool\>\] \[-DisableEmailComparisonCheck \<bool\>\] \[-DisableEmoticons \<bool\>\] \[-DisableFeedsTab \<bool\>\] \[-DisableFederatedPromptDisplayName \<bool\>\] \[-DisableFreeBusyInfo \<bool\>\] \[-DisableHandsetOnLockedMachine \<bool\>\] \[-DisableMeetingSubjectAndLocation \<bool\>\] \[-DisableHtmlIm \<bool\>\] \[-DisableInkIM \<bool\>\] \[-DisableOneNote12Integration \<bool\>\] \[-DisableOnlineContextualSearch \<bool\>\] \[-DisablePhonePresence \<bool\>\] \[-DisablePICPromptDisplayName \<bool\>\] \[-DisablePoorDeviceWarnings \<bool\>\] \[-DisablePoorNetworkWarnings \<bool\>\] \[-DisablePresenceNote \<bool\>\] \[-DisableRTFIM \<bool\>\] \[-DisableSavingIM \<bool\>\] \[-DisplayPhoto \<DisplayPhoto\>\] \[-EnableAppearOffline \<bool\>\] \[-EnableCallLogAutoArchiving \<bool\>\] \[-EnableClientAutoPopulateWithTeam \<bool\>\] \[-EnableClientMusicOnHold \<bool\>\] \[-EnableConversationWindowTabs \<bool\>\] \[-EnableEnterpriseCustomizedHelp \<bool\>\] \[-EnableEventLogging \<bool\>\] \[-EnableExchangeContactSync \<bool\>\] \[-EnableExchangeDelegateSync \<bool\>\] \[-EnableExchangeContactsFolder \<bool\>\] \[-EnableFullScreenVideo \<bool\>\] \[-EnableHighPerformanceConferencingAppSharing \<bool\>\] \[-EnableHotdesking \<bool\>\] \[-EnableIMAutoArchiving \<bool\>\] \[-EnableMediaRedirection \<bool\>\] \[-EnableMeetingEngagement \<bool\>\] \[-EnableNotificationForNewSubscribers \<bool\>\] \[-EnableServerConversationHistory \<bool\>\] \[-EnableSkypeUI \<bool\>\] \[-EnableSQMData \<bool\>\] \[-EnableTracing \<bool\>\] \[-EnableURL \<bool\>\] \[-EnableUnencryptedFileTransfer \<bool\>\] \[-EnableVOIPCallDefault \<bool\>\] \[-ExcludedContactFolders \<string\>\] \[-HotdeskingTimeout \<timespan\>\] \[-IMWarning \<string\>\] \[-MAPIPollInterval \<timespan\>\] \[-MaximumDGsAllowedInContactList \<uint32\>\] \[-MaximumNumberOfContacts \<uint16\>\] \[-MaxPhotoSizeKB \<uint32\>\] \[-MusicOnHoldAudioFile \<string\>\] \[-P2PAppSharingEncryption \<P2PAppSharingEncryption\>\] \[-EnableHighPerformanceP2PAppSharing \<bool\>\] \[-PlayAbbreviatedDialTone \<bool\>\] \[-RequireContentPin \<string\>\] \[-SearchPrefixFlags \<uint16\>\] \[-ShowRecentContacts \<bool\>\] \[-ShowManagePrivacyRelationships \<bool\>\] \[-ShowSharepointPhotoEditLink \<bool\>\] \[-SPSearchInternalURL \<string\>\] \[-SPSearchExternalURL \<string\>\] \[-SPSearchCenterInternalURL \<string\>\] \[-SPSearchCenterExternalURL \<string\>\] \[-TabURL \<string\>\] \[-TracingLevel \<TracingLevel\>\] \[-TelemetryTier \<string\>\] \[-PublicationBatchDelay \<uint32\>\] \[-EnableViewBasedSubscriptionMode \<bool\>\] \[-WebServicePollInterval \<timespan\>\] \[-HelpEnvironment \<string\>\] \[-RateMyCallDisplayPercentage \<uint16\>\] \[-RateMyCallAllowCustomUserFeedback \<bool\>\] \[-IMLatencySpinnerDelay \<uint32\>\] \[-IMLatencyErrorThreshold \<uint32\>\] \[-SupportModernFilePicker \<bool\>\] \[-EnableOnlineFeedback \<bool\>\] \[-EnableOnlineFeedbackScreenshots \<bool\>\] \[-ConferenceIMIdleTimeout \<timespan\>\] \[-InMemory\] \[-BypassDualWrite \<bool\>\] \[-Force\] \[-WhatIf\] \[-Confirm\] \[\<CommonParameters\>\]

Below Content Applies To: Skype for Business Server 2015

Creates a new client policy.
Among other things, client policies help determine the features of Skype for Business Server 2015 that are made available to users; for example, you might give some users the right to transfer files while denying this right to other users.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
New-CsClientPolicy [-Identity] <XdsIdentity> [-AddressBookAvailability <AddressBookAvailability>]
 [-AttendantSafeTransfer <Boolean>] [-AutoDiscoveryRetryInterval <TimeSpan>]
 [-BlockConversationFromFederatedContacts <Boolean>] [-CalendarStatePublicationInterval <UInt32>]
 [-ConferenceIMIdleTimeout <TimeSpan>] [-CustomizedHelpUrl <String>] [-CustomLinkInErrorMessages <String>]
 [-CustomStateUrl <String>] [-Description <String>] [-DGRefreshInterval <TimeSpan>]
 [-DisableCalendarPresence <Boolean>] [-DisableContactCardOrganizationTab <Boolean>]
 [-DisableEmailComparisonCheck <Boolean>] [-DisableEmoticons <Boolean>]
 [-DisableFederatedPromptDisplayName <Boolean>] [-DisableFeedsTab <Boolean>] [-DisableFreeBusyInfo <Boolean>]
 [-DisableHandsetOnLockedMachine <Boolean>] [-DisableHtmlIm <Boolean>] [-DisableICE <Boolean>]
 [-DisableInkIM <Boolean>] [-DisableOneNote12Integration <Boolean>] [-DisableOnlineContextualSearch <Boolean>]
 [-DisablePhonePresence <Boolean>] [-DisablePICPromptDisplayName <Boolean>]
 [-DisablePoorDeviceWarnings <Boolean>] [-DisablePoorNetworkWarnings <Boolean>]
 [-DisablePresenceNote <Boolean>] [-DisableRTFIM <Boolean>] [-DisableSavingIM <Boolean>]
 [-DisplayPhoto <DisplayPhoto>] [-EnableAppearOffline <Boolean>] [-EnableCallLogAutoArchiving <Boolean>]
 [-EnableClientMusicOnHold <Boolean>] [-EnableConversationWindowTabs <Boolean>]
 [-EnableEnterpriseCustomizedHelp <Boolean>] [-EnableEventLogging <Boolean>]
 [-EnableExchangeContactSync <Boolean>] [-EnableExchangeDelegateSync <Boolean>]
 [-EnableFullScreenVideo <Boolean>] [-EnableHotdesking <Boolean>] [-EnableIMAutoArchiving <Boolean>]
 [-EnableSQMData <Boolean>] [-EnableTracing <Boolean>] [-EnableUnencryptedFileTransfer <Boolean>]
 [-EnableVOIPCallDefault <Boolean>] [-ExcludedContactFolders <String>] [-HotdeskingTimeout <TimeSpan>]
 [-IMWarning <String>] [-MAPIPollInterval <TimeSpan>] [-MaximumDGsAllowedInContactList <UInt32>]
 [-MaximumNumberOfContacts <UInt16>] [-MusicOnHoldAudioFile <String>]
 [-P2PAppSharingEncryption <P2PAppSharingEncryption>] [-PlayAbbreviatedDialTone <Boolean>]
 [-PolicyEntry <PSListModifier>] [-SearchPrefixFlags <UInt16>] [-ShowManagePrivacyRelationships <Boolean>]
 [-ShowRecentContacts <Boolean>] [-ShowSharepointPhotoEditLink <Boolean>] [-SPSearchCenterExternalURL <String>]
 [-SPSearchCenterInternalURL <String>] [-SPSearchExternalURL <String>] [-SPSearchInternalURL <String>]
 [-TabURL <String>] [-WebServicePollInterval <TimeSpan>] [-Force] [-InMemory] [-WhatIf] [-Confirm]
 [-DisableMeetingSubjectAndLocation <Boolean>] [-EnableNotificationForNewSubscribers <Boolean>]
 [-EnableURL <Boolean>] [-MaxPhotoSizeKB <UInt32>] [-EnableMediaRedirection <Boolean>]
 [-HelpEnvironment <String>] [-TracingLevel <TracingLevel>] [-BypassDualWrite <Object>]
 [-EnableClientAutoPopulateWithTeam <Object>] [-EnableExchangeContactsFolder <Object>]
 [-EnableHighPerformanceConferencingAppSharing <Object>] [-EnableHighPerformanceP2PAppSharing <Object>]
 [-EnableMeetingEngagement <Object>] [-EnableOnlineFeedback <Object>]
 [-EnableOnlineFeedbackScreenshots <Object>] [-EnableServerConversationHistory <Object>]
 [-EnableSkypeUI <Object>] [-EnableViewBasedSubscriptionMode <Object>] [-IMLatencyErrorThreshold <Object>]
 [-IMLatencySpinnerDelay <Object>] [-PublicationBatchDelay <Object>]
 [-RateMyCallAllowCustomUserFeedback <Object>] [-RateMyCallDisplayPercentage <Object>]
 [-RequireContentPin <Object>] [-SupportModernFilePicker <Object>] [-TelemetryTier <Object>] [-Tenant <Object>]
 [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2010

In Lync Server 2010, client policies replace the Group Policy settings used in previous versions of the product.
In Microsoft Office Communicator 2007 and Microsoft Office Communicator 2007 R2, Group Policy helped determine what users could do with Communicator and other clients; for example, there were Group Policy settings that determined whether or not users could save a transcript of their instant messaging sessions; whether information from Microsoft Outlook was incorporated into their presence information; and whether or not users could include emoticons or formatted text in instant messages.

As useful as Group Policy is, however, the technology does have some limitations when applied to Lync Server 2010.
For one thing, Group Policy is designed to be applied on a per-domain or per-organizational unit (OU) basis, which makes it difficult to target policies toward a more select group of users (for example, all the users who work in a particular department, or all the users who have a particular job title).
For another, Group Policy is only applied to users who log on to the domain and who log on using a computer; Group Policy is not applied to users who access Lync Server 2010 over the Internet or who access the system by using a mobile phone.
This means that the same user can have a different experience depending on the device he or she uses to log on, and where he or she logs on from.

To help address these inconsistencies, Lync Server 2010 uses client policies instead of Group Policy.
Client policies are applied each time a user accesses the system, regardless of where the user logs on from and regardless of the type of device the user logs on with.
In addition, client policies, like other Lync Server 2010 policies, can readily be targeted towards selected groups of users.
You can even create a custom policy that gets assigned to a single user.

The New-CsClientPolicy cmdlet enables you to create new client policies at either the site or the per-user scope.
Note that any given site can have, at most, a single client policy; if you try to create a policy for the Redmond site and that site already hosts a client policy, your command will fail.
Likewise, your command will fail if you try to create a new client policy at the global scope because the global scope already contains a client policy.
If you need to make changes to the global policy, use the Set-CsClientPolicy cmdlet instead.

Who can run this cmdlet: By default, members of the following groups are authorized to run the New-CsClientPolicy cmdlet: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object  {$_.Cmdlets -match "New-CsClientPolicy"}

Below Content Applies To: Lync Server 2013

In Lync Server, client policies replace the Group Policy settings used in previous versions of the product.
In Microsoft Office Communicator 2007 and Microsoft Office Communicator 2007 R2, Group Policy helped determine what users could do with Communicator and other clients; for example, there were Group Policy settings that determined whether or not users could save a transcript of their instant messaging sessions; whether information from Microsoft Outlook was incorporated into their presence information; and whether or not users could include emoticons or formatted text in instant messages.

As useful as Group Policy is, however, the technology does have some limitations when applied to Lync Server.
For one thing, Group Policy is designed to be applied on a per-domain or per-organizational unit (OU) basis, which makes it difficult to target policies toward a more select group of users (for example, all the users who work in a particular department, or all the users who have a particular job title).
For another, Group Policy is only applied to users who log on to the domain and who log on using a computer; Group Policy is not applied to users who access Lync Server over the Internet or who access the system by using a mobile phone.
This means that the same user can have a different experience depending on the device he or she uses to log on, and where he or she logs on from.

To help address these inconsistencies, Lync Server uses client policies instead of Group Policy.
Client policies are applied each time a user accesses the system, regardless of where the user logs on from and regardless of the type of device the user logs on with.
In addition, client policies, like other Lync Server policies, can readily be targeted toward selected groups of users.
You can even create a custom policy that gets assigned to a single user.

The New-CsClientPolicy cmdlet enables you to create new client policies at either the site or the per-user scope.
Note that any given site can have, at most, a single client policy; if you try to create a policy for the Redmond site and that site already hosts a client policy, your command will fail.
Likewise, your command will fail if you try to create a new client policy at the global scope because the global scope already contains a client policy.
If you need to make changes to the global policy, use the Set-CsClientPolicy cmdlet instead.

Who can run this cmdlet: By default, members of the following groups are authorized to run the New-CsClientPolicy cmdlet: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "New-CsClientPolicy"}

Below Content Applies To: Skype for Business Online

{{Fill in the Description}}

Below Content Applies To: Skype for Business Server 2015

Client policies are applied each time a user accesses the system, regardless of where the user logs on from and regardless of the type of device the user logs on with.
In addition, client policies, like other Skype for Business Server 2015 policies, can readily be targeted toward selected groups of users.
You can even create a custom policy that gets assigned to a single user.

The New-CsClientPolicy cmdlet enables you to create new client policies at either the site or the per-user scope.
Note that any given site can have, at most, a single client policy; if you try to create a policy for the Redmond site and that site already hosts a client policy, your command will fail.
Likewise, your command will fail if you try to create a new client policy at the global scope because the global scope already contains a client policy.
If you need to make changes to the global policy, use the Set-CsClientPolicy cmdlet instead.

Keep in mind that client policies differ from many other policies in that most of the policy settings do not have default values.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
New-CsClientPolicy -Identity RedmondClientPolicy -DisableCalendarPresence $True -DisablePhonePresence $True -DisplayPhoto "PhotosFromADOnly"
```

The command shown in Example 1 creates a new client policy with the Identity RedmondClientPolicy.
In addition to specifying the Identity, this command also includes three optional parameters and their parameter values: DisableCalendarPresence, DisablePhonePresence, and DisplayPhoto.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 creates a new client policy with the Identity RedmondClientPolicy.
In addition to specifying the Identity, this command also includes three optional parameters and their parameter values: DisableCalendarPresence, DisablePhonePresence, and DisplayPhoto.

New-CsClientPolicy -Identity RedmondClientPolicy -DisableCalendarPresence $True -DisablePhonePresence $True -DisplayPhoto "PhotosFromADOnly"

### Example 1 (Skype for Business Online)
```
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 creates a new client policy with the Identity RedmondClientPolicy.
In addition to specifying the Identity, this command also includes three optional parameters and their parameter values: DisableCalendarPresence, DisablePhonePresence, and DisplayPhoto.

New-CsClientPolicy -Identity RedmondClientPolicy -DisableCalendarPresence $True -DisablePhonePresence $True -DisplayPhoto "PhotosFromADOnly"

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
$x = New-CsClientPolicy -Identity RedmondClientPolicy -InMemory
$x.DisableCalendarPresence = $True 
$x.DisablePhonePresence = $True 
$x.DisplayPhoto = "PhotosFromADOnly"
Set-CsClientPolicy -Instance $x
```

Example 2 also creates a new client policy with the Identity RedmondClientPolicy; the difference between these commands and the command used in Example 1 is that, in Example 2, the new policy is created in memory only, and is only later turned into an actual client policy.
To do this, New-CsClientPolicy is first called along with two parameters: Identity (to specify the Identity for the new policy), and InMemory, which specifies that the new policy should be created in memory only and not immediately put into use.
Because this policy is created in memory only, it must be stored in a variable; in this example, that's a variable named $x.

After the virtual policy has been created, the next three commands are used to modify properties for this virtual policy; for example, command 2 sets the value of the DisableCalendarPresence property to True ($True).
After all the desired modifications have been made, the final command uses Set-CsClientPolicy to turn this virtual policy into an actual client policy that can be assigned to users.
Note that this final command is critical.
If you do not call Set-CsClientPolicy the policy RedmondClientPolicy will not be created, and the virtual policy will disappear as soon as you end your Windows PowerShell session or delete the variable $x.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

Example 2 also creates a new client policy with the Identity RedmondClientPolicy; the difference between these commands and the command used in Example 1 is that, in Example 2, the new policy is created in memory only, and is only later turned into an actual client policy.
To do this, New-CsClientPolicy is first called along with two parameters: Identity (to specify the Identity for the new policy), and InMemory, which specifies that the new policy should be created in memory only and not immediately put into use.
Because this policy is created in memory only, it must be stored in a variable; in this example, that's a variable named $x.

After the virtual policy has been created, the next three commands are used to modify properties for this virtual policy; for example, command 2 sets the value of the DisableCalendarPresence property to True ($True).
After all the intended modifications have been made, the final command uses Set-CsClientPolicy to turn this virtual policy into an actual client policy that can be assigned to users.
Note that this final command is critical.
If you do not call Set-CsClientPolicy the policy RedmondClientPolicy will not be created, and the virtual policy will disappear as soon as you end your Windows PowerShell session or delete the variable $x.

$x = New-CsClientPolicy -Identity RedmondClientPolicy -InMemory

$x.DisableCalendarPresence = $True

$x.DisablePhonePresence = $True

$x.DisplayPhoto = "PhotosFromADOnly"

Set-CsClientPolicy -Instance $x

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 also creates a new client policy with the Identity RedmondClientPolicy; the difference between these commands and the command used in Example 1 is that, in Example 2, the new policy is created in memory only, and is only later turned into an actual client policy.
To do this, the New-CsClientPolicy cmdlet is first called along with two parameters: Identity (to specify the Identity for the new policy), and InMemory, which specifies that the new policy should be created in memory only and not immediately put into use.
Because this policy is created in memory only, it must be stored in a variable; in this example, that's a variable named $x.

After the virtual policy has been created, the next three commands are used to modify properties for this virtual policy; for example, command 2 sets the value of the DisableCalendarPresence property to True ($True).
After all the intended modifications have been made, the final command uses the Set-CsClientPolicy cmdlet to turn this virtual policy into an actual client policy that can be assigned to users.
Note that this final command is critical.
If you do not call the Set-CsClientPolicy cmdlet the policy RedmondClientPolicy will not be created, and the virtual policy will disappear as soon as you end your Windows PowerShell session or delete the variable $x.

$x = New-CsClientPolicy -Identity RedmondClientPolicy -InMemory

$x.DisableCalendarPresence = $True

$x.DisablePhonePresence = $True

$x.DisplayPhoto = "PhotosFromADOnly"

Set-CsClientPolicy -Instance $x

## PARAMETERS

### -Identity
Below Content Applies To: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Unique Identity to be assigned to the new policy.
New client policies can be created at the site or per-user scope.
To create a new site policy, use the prefix "site:" and the name of the site as your Identity.
For example, use this syntax to create a new policy for the Redmond site: -Identity site:Redmond.
To create a new per-user policy, use an identity similar to this: -Identity SalesClientPolicy.



Below Content Applies To: Skype for Business Online

{{Fill Identity Description}}



```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AddressBookAvailability
Below Content Applies To: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Indicates how users are allowed to access information by using the Address Book Web Query service and/or by downloading a copy of the Address Book to their local computer).
AddressBookAvailability must be set to one of the following values:

WebSearchAndFileDownload

WebSearchOnly

FileDownloadOnly



Below Content Applies To: Skype for Business Online

{{Fill AddressBookAvailability Description}}



```yaml
Type: AddressBookAvailability
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AttendantSafeTransfer
Below Content Applies To: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

When set to True, Attendant operates in "safe transfer" mode; this means that transferred calls that do not reach the intended recipient will reappear in the incoming area along with a "Failed Transfer" notice.
When set to False, transferred calls that fail to reach the intended recipient will not reappear in the incoming area.



Below Content Applies To: Skype for Business Online

{{Fill AttendantSafeTransfer Description}}



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutoDiscoveryRetryInterval
Below Content Applies To: Lync Server 2010

After a failed connection attempt, specifies the amount of time Lync 2010 waits before trying again to connect to Lync Server.
The AutoDiscoveryRetryInterval can be set to any integer value between 15 and 480 minutes (8 hours), inclusive.
The default value is 30 minutes.

This setting is equivalent to the Office Communications Server 2007 R2 Group Policy setting "Time interval to retry autodiscovery."



Below Content Applies To: Lync Server 2013

After a failed connection attempt, specifies the amount of time Lync waits before trying again to connect to Lync Server.
The AutoDiscoveryRetryInterval can be set to value between 1 second and 60 minutes (1 hour), inclusive.

When specifying the AutoDiscoveryRetryInterval you must use the format hours:minutes:seconds.
For example, to set the interval to 25 minutes use this syntax:

- AutoDiscoveryRetryInterval 00:25:00

This setting is equivalent to the Office Communications Server 2007 R2 Group Policy setting "Time interval to retry autodiscovery."



Below Content Applies To: Skype for Business Online

{{Fill AutoDiscoveryRetryInterval Description}}



Below Content Applies To: Skype for Business Server 2015

After a failed connection attempt, specifies the amount of time Skype for Business waits before trying again to connect to Skype for Business Server 2015.
The AutoDiscoveryRetryInterval can be set to value between 1 second and 60 minutes (1 hour), inclusive.

When specifying the AutoDiscoveryRetryInterval you must use the format hours:minutes:seconds.
For example, to set the interval to 25 minutes use this syntax: - AutoDiscoveryRetryInterval 00:25:00



```yaml
Type: TimeSpan
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BlockConversationFromFederatedContacts
Below Content Applies To: Lync Server 2010, Lync Server 2013

When set to True, contacts from outside your organization will not be allowed to initiate instant messaging conversations with any user that this policy applies to.
However, outside users will be able to participate in conversations as long as the internal user initiates that conversation.
When set to False, outside contacts are allowed to send unsolicited instant messages to users in your organization.

This setting is equivalent to the Communications Server 2007 R2 Group Policy setting "Block conversation from federated contacts."



Below Content Applies To: Skype for Business Online

{{Fill BlockConversationFromFederatedContacts Description}}



Below Content Applies To: Skype for Business Server 2015

When set to True, contacts from outside your organization will not be allowed to initiate instant messaging conversations with any user that this policy applies to.
However, outside users will be able to participate in conversations as long as the internal user initiates that conversation.
When set to False, outside contacts are allowed to send unsolicited instant messages to users in your organization.



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CalendarStatePublicationInterval
Below Content Applies To: Lync Server 2010

Specifies the amount of time, in seconds, that Lync 2010 waits before retrieving calendar information from Microsoft Outlook and adding this data to your presence information.

This setting is equivalent to the Communications Server 2007 R2 Group Policy setting "Time interval to publish calendar data to presence."



Below Content Applies To: Lync Server 2013

Specifies the amount of time, in seconds, that Lync waits before retrieving calendar information from Microsoft Outlook and adding this data to your presence information.

For example, to set the CalendarStatePublicationInterval to 10 minutes (600 seconds) use this syntax:

- CalendarStatePublicationInterval 600

This setting is equivalent to the Communications Server 2007 R2 Group Policy setting "Time interval to publish calendar data to presence."



Below Content Applies To: Skype for Business Online

{{Fill CalendarStatePublicationInterval Description}}



Below Content Applies To: Skype for Business Server 2015

Specifies the amount of time, in seconds, that Skype for Business waits before retrieving calendar information from Microsoft Outlook and adding this data to your presence information.

For example, to set the CalendarStatePublicationInterval to 10 minutes (600 seconds) use this syntax:

- CalendarStatePublicationInterval 600



```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConferenceIMIdleTimeout
Below Content Applies To: Lync Server 2010

Indicates the number of minutes that a user can remain in an instant messaging session without either sending or receiving an instant message.



Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Indicates the number of minutes that a user can remain in an instant messaging session without either sending or receiving an instant message.

The ConferenceIMIdleTimeout must be less than or equal to 1 hour, and must be specified using the format hours:minutes:seconds.
For example, this syntax sets the timeout value to 45 minutes:

-ConferenceIMIdleTimeout 00:45:00



Below Content Applies To: Skype for Business Online

{{Fill ConferenceIMIdleTimeout Description}}



```yaml
Type: TimeSpan
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomizedHelpUrl
Below Content Applies To: Lync Server 2010

URL for custom Lync 2010 help set up by an organization.
This help, rather than the default product help, will be displayed any time a user clicks the Help menu in Lync 2010.

Customized help will not be available unless you also set EnableEnterpriseCustomizedHelp to True.

This setting is equivalent to the Communications Server 2007 R2 Group Policy setting "Help menu."



Below Content Applies To: Lync Server 2013

URL for custom Lync Server help set up by an organization.
This help, rather than the default product help, will be displayed any time a user clicks the Help menu in Lync.

Customized help will not be available unless you also set EnableEnterpriseCustomizedHelp to True.

This setting is equivalent to the Communications Server 2007 R2 Group Policy setting "Help menu." This parameter has been deprecated for use with Lync Server 2013 Preview.



Below Content Applies To: Skype for Business Online

{{Fill CustomizedHelpUrl Description}}



Below Content Applies To: Skype for Business Server 2015

URL for custom help set up by an organization.
This help, rather than the default product help, will be displayed any time a user clicks the Help menu in Skype for Business.

Customized help will not be available unless you also set EnableEnterpriseCustomizedHelp to True.

This parameter has been deprecated for use with Skype for Business Server 2015.



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomLinkInErrorMessages
Below Content Applies To: Lync Server 2010

URL for the website that can be added to error messages that appear in Lync 2010.
If a URL is specified, that URL will appear at the bottom of any error message that occurs in Lync 2010.
Users can then click that link and be taken to a custom website that contains additional information, such as troubleshooting tips.



Below Content Applies To: Lync Server 2013

URL for the website that can be added to error messages that appear in Lync Server.
If a URL is specified, that URL will appear at the bottom of any error message that occurs in Lync Server.
Users can then click that link and be taken to a custom website that contains additional information, such as troubleshooting tips.



Below Content Applies To: Skype for Business Online

{{Fill CustomLinkInErrorMessages Description}}



Below Content Applies To: Skype for Business Server 2015

URL for the website that can be added to error messages that appear in Skype for Business.
If a URL is specified, that URL will appear at the bottom of any error message that occurs in Skype for Business.
Users can then click that link and be taken to a custom website that contains additional information, such as troubleshooting tips.



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomStateUrl
Below Content Applies To: Lync Server 2010

Specifies the location of the XML file used to add custom presence states to Lync 2010.
(Lync 2010 allows up to four custom presence states in addition to the built-in states such as Available, Busy, and Do Not Disturb.) The location of the XML file should be specified using the HTTPS protocol.

This setting is equivalent to the Communications Server 2007 R2 Group Policy setting "Custom presence states URL."



Below Content Applies To: Lync Server 2013

Specifies the location of the XML file used to add custom presence states to Lync Server.
(Lync Server allows up to four custom presence states in addition to the built-in states such as Available, Busy, and Do Not Disturb.) The location of the XML file should be specified using the HTTPS protocol.

This setting is equivalent to the Communications Server 2007 R2 Group Policy setting "Custom presence states URL."



Below Content Applies To: Skype for Business Online

{{Fill CustomStateUrl Description}}



Below Content Applies To: Skype for Business Server 2015

Specifies the location of the XML file used to add custom presence states to Skype for Business.
(Skype for Business allows up to four custom presence states in addition to the built-in states such as Available, Busy, and Do Not Disturb.) The location of the XML file should be specified using the HTTPS protocol.



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
Below Content Applies To: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Allows administrators to provide additional information about a policy.
For example, the Description might indicate which users the policy should be assigned to.



Below Content Applies To: Skype for Business Online

{{Fill Description Description}}



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DGRefreshInterval
Below Content Applies To: Lync Server 2010

Indicates the amount of time Lync 2010 waits before automatically refreshing the membership list of any distribution group that has been "expanded" in the Contacts list.
(Expanding a distribution group means displaying all the members in that group.) DGRefreshInterval can be set to any integer value between 30 seconds and 28,800 seconds (8 hours), inclusive.
The default value is 28,800 seconds.

This setting is equivalent to the Communications Server 2007 R2 Group Policy setting "Time interval to refresh the membership of each distribution group."



Below Content Applies To: Lync Server 2013

Indicates the amount of time Lync Server waits before automatically refreshing the membership list of any distribution group that has been "expanded" in the Contacts list.
(Expanding a distribution group means displaying all the members in that group.) DGRefreshInterval can be set to any integer value between 30 seconds and 28,800 seconds (8 hours), inclusive.
The default value is 28,800 seconds.

This setting is equivalent to the Communications Server 2007 R2 Group Policy setting "Time interval to refresh the membership of each distribution group."



Below Content Applies To: Skype for Business Online

{{Fill DGRefreshInterval Description}}



Below Content Applies To: Skype for Business Server 2015

Indicates the amount of time Skype for Business waits before automatically refreshing the membership list of any distribution group that has been "expanded" in the Contacts list.
(Expanding a distribution group means displaying all the members in that group.) DGRefreshInterval can be set to any integer value between 30 seconds and 28,800 seconds (8 hours), inclusive.
The default value is 28,800 seconds.



```yaml
Type: TimeSpan
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisableCalendarPresence
Below Content Applies To: Lync Server 2010, Lync Server 2013

When set to True, calendar data taken from Microsoft Outlook will not be included in your presence information.
When set to False, calendar data will be included in your presence information.
For example, free/busy information will be reported in your contact card.
Likewise, your status will automatically be set to Busy any time Outlook shows that you are in a meeting.

This setting is equivalent to the Communications Server 2007 R2 Group Policy setting "Disable calendar presence."



Below Content Applies To: Skype for Business Online

{{Fill DisableCalendarPresence Description}}



Below Content Applies To: Skype for Business Server 2015

When set to True, calendar data taken from Microsoft Outlook will not be included in your presence information.
When set to False, calendar data will be included in your presence information.
For example, free/busy information will be reported in your contact card.
Likewise, your status will automatically be set to Busy any time Outlook shows that you are in a meeting.



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisableContactCardOrganizationTab
Below Content Applies To: Lync Server 2010

When set to True, the contact card Organization tab is not visible within the Lync 2010 user interface.
When set to False, the contact card Organization tab is available in Lync 2010.



Below Content Applies To: Lync Server 2013

When set to True, the contact card Organization tab is not visible within the Lync user interface.
When set to False, the contact card Organization tab is available in Lync.



Below Content Applies To: Skype for Business Online

{{Fill DisableContactCardOrganizationTab Description}}



Below Content Applies To: Skype for Business Server 2015

When set to True, the contact card Organization tab is not visible within the Skype for Business user interface.
When set to False, the contact card Organization tab is available in Skype for Business.



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisableEmailComparisonCheck
Below Content Applies To: Lync Server 2010

When set to True, Lync 2010 will not attempt to verify that any currently running instance of Microsoft Outlook belongs to the same user running Lync 2010; for example, the software will not verify that both Outlook and Lync 2010 are running under Ken Myer's user account.
Instead, it will be assumed that the two applications are running under the same account and, in turn, will include contact and calendar data in Outlook with Lync 2010.

When set to False, Lync 2010 will use SMTP addresses to verify that Outlook and Lync 2010 are running under the same account.
If the SMTP addresses do not match, then contact and calendar data in Outlook will not be incorporated into Lync 2010.



Below Content Applies To: Lync Server 2013

When set to True, Lync will not attempt to verify that any currently running instance of Microsoft Outlook belongs to the same user running Lync Server; for example, the software will not verify that both Outlook and Lync are running under Ken Myer's user account.
Instead, it will be assumed that the two applications are running under the same account and, in turn, will include contact and calendar data in Outlook with Lync.

When set to False, Lync will use SMTP addresses to verify that Outlook and Lync are running under the same account.
If the SMTP addresses do not match, then contact and calendar data in Outlook will not be incorporated intoLync.



Below Content Applies To: Skype for Business Online

{{Fill DisableEmailComparisonCheck Description}}



Below Content Applies To: Skype for Business Server 2015

When set to True, Skype for Business will not attempt to verify that any currently running instance of Microsoft Outlook belongs to the same user running Skype for Business; for example, the software will not verify that both Outlook and Skype for Business are running under Ken Myer's user account.
Instead, it will be assumed that the two applications are running under the same account and, in turn, will include contact and calendar data in Outlook with Skype for Business.

When set to False, Skype for Business will use SMTP addresses to verify that Outlook and Skype for Business are running under the same account.
If the SMTP addresses do not match, then contact and calendar data in Outlook will not be incorporated into Skype for Business.



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisableEmoticons
Below Content Applies To: Lync Server 2010, Lync Server 2013

When set to True, users will not be able to send or receive emoticons in their instant messages; instead they will be see the text equivalent of those emoticons.
For example, instead of seeing a graphical "smiley face," users will see the text equivalent:

: )

When set to False, users will be able to include emoticons in their instant messages, and to view emoticons in instant messages they receive.

This setting is equivalent to the Communications Server 2007 R2 Group Policy setting "Disable emoticons in instant messages."



Below Content Applies To: Skype for Business Online

{{Fill DisableEmoticons Description}}



Below Content Applies To: Skype for Business Server 2015

When set to True, users will not be able to send or receive emoticons in their instant messages; instead they will be see the text equivalent of those emoticons.
For example, instead of seeing a graphical "smiley face," users will see the text equivalent:

: )

When set to False, users will be able to include emoticons in their instant messages, and to view emoticons in instant messages they receive.



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisableFederatedPromptDisplayName
Below Content Applies To: Lync Server 2010, Lync Server 2013

When set to True, any notification dialog box generated when you are added to a federated user's Contacts list will use the federated user's SIP address (for example, sip:kenmyer@fabrikam.com).
When set to False, the notification dialog box will use the federated user's display name (for example, Ken Myer) instead.

This setting is equivalent to the Communications Server 2007 R2 Group Policy setting "Prevent showing the display name of federated, non-PIC contacts in the notification dialog."



Below Content Applies To: Skype for Business Online

{{Fill DisableFederatedPromptDisplayName Description}}



Below Content Applies To: Skype for Business Server 2015

When set to True, any notification dialog box generated when you are added to a federated user's Contacts list will use the federated user's SIP address (for example, sip:kenmyer@fabrikam.com).
When set to False, the notification dialog box will use the federated user's display name (for example, Ken Myer) instead.



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisableFeedsTab
Below Content Applies To: Lync Server 2010

When set to True, the activity feeds tab will not be displayed in Lync Server 2010.
When set to False, the feeds tab will be available within Lync Server 2010.



Below Content Applies To: Lync Server 2013

When set to True, the activity feeds tab will not be displayed in Lync.
When set to False, the feeds tab will be available within Lync.



Below Content Applies To: Skype for Business Online

{{Fill DisableFeedsTab Description}}



Below Content Applies To: Skype for Business Server 2015

When set to True, the activity feeds tab will not be displayed in Skype for Business.
When set to False, the feeds tab will be available within Skype for Business.



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisableFreeBusyInfo
Below Content Applies To: Lync Server 2010, Lync Server 2013

When set to True, free/busy information retrieved from Microsoft Outlook will not be displayed in your contact card.
When set to False, free/busy information is displayed in your contact card.
For example, your contact card might include a note similar to this:

Calendar: Free until 2:00 PM

This setting is equivalent to the Communications Server 2007 R2 Group Policy setting "Disable publishing free/busy info."



Below Content Applies To: Skype for Business Online

{{Fill DisableFreeBusyInfo Description}}



Below Content Applies To: Skype for Business Server 2015

When set to True, free/busy information retrieved from Microsoft Outlook will not be displayed in your contact card.
When set to False, free/busy information is displayed in your contact card.
For example, your contact card might include a note similar to this:

Calendar: Free until 2:00 PM



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisableHandsetOnLockedMachine
Below Content Applies To: Lync Server 2010

When set to True, users will not be able to use a phone running Microsoft Lync 2010 Phone Edition if the computer that the phone is connected to is locked.
To use the phone, users will first have to unlock the computer.

When set to False, users will be allowed to use a phone running Lync 2010 Phone Edition even if the computer the handset is connected to is locked.

This setting is equivalent to the Communications Server 2007 R2 Group Policy setting "Configure handset use on locked machine."



Below Content Applies To: Lync Server 2013

When set to True, users will not be able to use their Polycom handset if the computer that the handset is connected to is locked.
To use the handset, users will first have to unlock the computer.

When set to False, users will be allowed to use their Polycom handset even if the computer the handset is connected to is locked.

This setting is equivalent to the Communications Server 2007 R2 Group Policy setting "Configure handset use on locked machine."



Below Content Applies To: Skype for Business Online

{{Fill DisableHandsetOnLockedMachine Description}}



Below Content Applies To: Skype for Business Server 2015

When set to True, users will not be able to use their Polycom handset if the computer that the handset is connected to is locked.
To use the handset, users will first have to unlock the computer.

When set to False, users will be allowed to use their Polycom handset even if the computer the handset is connected to is locked.



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisableHtmlIm
Below Content Applies To: Lync Server 2010

When set to True, any HTML text copied from a webpage will be converted to plain text when pasted into an instant message.
When set to False, HTML formatting (such as font size and color, dropdown lists, and buttons) will be retained when pasted into an instant message.

Note that, even when set to False, scripts and other potentially malicious items (such as tags that play a sound) will not be copied into an instant message.
You can copy and paste buttons and other controls into a message, but any scripts attached to those controls will automatically be removed.

This setting is equivalent to the Communicator 2007 R2 Group Policy setting "Prevent HTML text in instant messages."



Below Content Applies To: Lync Server 2013

When set to True, any HTML text copied from a webpage will be converted to plain text when pasted into an instant message.
When set to False, HTML formatting (such as font size and color, drop-down lists, and buttons) will be retained when pasted into an instant message.

Note that, even when set to False, scripts and other potentially malicious items (such as tags that play a sound) will not be copied into an instant message.
You can copy and paste buttons and other controls into a message, but any scripts attached to those controls will automatically be removed.

This setting is equivalent to the Communicator 2007 R2 Group Policy setting "Prevent HTML text in instant messages."



Below Content Applies To: Skype for Business Online

{{Fill DisableHtmlIm Description}}



Below Content Applies To: Skype for Business Server 2015

When set to True, any HTML text copied from a webpage will be converted to plain text when pasted into an instant message.
When set to False, HTML formatting (such as font size and color, drop-down lists, and buttons) will be retained when pasted into an instant message.

Note that, even when set to False, scripts and other potentially malicious items (such as tags that play a sound) will not be copied into an instant message.
You can copy and paste buttons and other controls into a message, but any scripts attached to those controls will automatically be removed.



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisableICE
When set to True, Lync 2010 will not use the Interactive Connectivity Establishment (ICE) protocol to traverse firewalls and network address translation (NAT) devices; this effectively prevents users from making Lync 2010 calls across the Internet.
When set to False, Lync 2010 will use the ICE protocol to enable Lync 2010 calls to traverse firewalls and NAT devices.

This setting is equivalent to the Communications Server 2007 R2 Group Policy setting "Disable Interactive Connectivity Establishment (ICE)."

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisableInkIM
Below Content Applies To: Lync Server 2010, Lync Server 2013

When set to True, users will not be allowed to receive instant messages containing Tablet PC ink.
(Ink is a technology that enables you to insert handwritten notes into a document.) When set to False, users will be allowed to receive messages that contain Tablet PC ink.

This setting is equivalent to the Communications Server 2007 R2 Group Policy setting "Prevent ink in instant messages."



Below Content Applies To: Skype for Business Online

{{Fill DisableInkIM Description}}



Below Content Applies To: Skype for Business Server 2015

When set to True, users will not be allowed to receive instant messages containing Tablet PC ink.
(Ink is a technology that enables you to insert handwritten notes into a document.) When set to False, users will be allowed to receive messages that contain Tablet PC ink.



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisableOneNote12Integration
Below Content Applies To: Lync Server 2010

When set to True, the ability to launch Microsoft OneNote from within Lync 2010 (and the ability to automatically link instant messaging sessions and OneNote notes) is disabled.
When set to False, the option Take Notes Using OneNote is enabled in Lync 2010.
In addition, if you locate an instant message transcript in Microsoft Outlook's Conversation History, you can retrieve any OneNote notes associated with that conversation just by clicking the Edit conversation notes button.

This setting is equivalent to the Communications Server 2007 R2 Group Policy setting "Disable OneNote 12 integration."



Below Content Applies To: Lync Server 2013

When set to True, the ability to start Microsoft OneNote from within Lync (and the ability to automatically link instant messaging sessions and OneNote notes) is disabled.
When set to False, the option Take Notes Using OneNote is enabled in Lync.
In addition, if you locate an instant message transcript in Microsoft Outlook's Conversation History, you can retrieve any OneNote notes associated with that conversation just by clicking the Edit conversation notes button.

This setting is equivalent to the Communications Server 2007 R2 Group Policy setting "Disable OneNote 12 integration."



Below Content Applies To: Skype for Business Online

{{Fill DisableOneNote12Integration Description}}



Below Content Applies To: Skype for Business Server 2015

When set to True, the ability to start Microsoft OneNote from within Skype for Business (and the ability to automatically link instant messaging sessions and OneNote notes) is disabled.
When set to False, the option Take Notes Using OneNote is enabled in Skype for Business.
In addition, if you locate an instant message transcript in Microsoft Outlook's Conversation History, you can retrieve any OneNote notes associated with that conversation just by clicking the Edit conversation notes button.



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisableOnlineContextualSearch
Below Content Applies To: Lync Server 2010, Lync Server 2013

When set to True, disables the Find Previous Conversations menu option that appears when you right-click a user in your Contacts list.
(This option enables you to search the Microsoft Outlook Conversation History folder for previous instant messaging sessions involving the user in question.) When set to False, the Find Previous Conversations option will be available when you right-click a user in your Contacts list.

Note that this setting only applies to users who are not running Microsoft Outlook in cached mode.
That's because any searches conducted by those users must take place on Microsoft Exchange Server, and administrators might want to limit the network traffic generated by these searches.
If you are running Outlook in cached mode, searches take place on a user's locally-cached copy of his or her Inbox.
Cached searches are not affected by this setting.

This setting is equivalent to the Communications Server 2007 R2 Group Policy setting "Disable online contextual search."



Below Content Applies To: Skype for Business Online

{{Fill DisableOnlineContextualSearch Description}}



Below Content Applies To: Skype for Business Server 2015

When set to True, disables the Find Previous Conversations menu option that appears when you right-click a user in your Contacts list.
(This option enables you to search the Microsoft Outlook Conversation History folder for previous instant messaging sessions involving the user in question.) When set to False, the Find Previous Conversations option will be available when you right-click a user in your Contacts list.

Note that this setting only applies to users who are not running Microsoft Outlook in cached mode.
That's because any searches conducted by those users must take place on Microsoft Exchange Server, and administrators might want to limit the network traffic generated by these searches.
If you are running Outlook in cached mode, searches take place on a user's locally-cached copy of his or her Inbox.
Cached searches are not affected by this setting.



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisablePhonePresence
Below Content Applies To: Lync Server 2010

When set to True, Lync 2010 does not take phone calls into consideration when determining your current status.
When set to False, phone calls are taken into consideration when determining your status.
For example, any time you are on the phone your status will automatically be set to Busy.

This setting is equivalent to the Communications Server 2007 R2 Group Policy setting "Disable call presence."



Below Content Applies To: Lync Server 2013

When set to True, Lync does not take phone calls into consideration when determining your current status.
When set to False, phone calls are taken into consideration when determining your status.
For example, any time you are on the phone your status will automatically be set to Busy.

This setting is equivalent to the Communications Server 2007 R2 Group Policy setting "Disable call presence."



Below Content Applies To: Skype for Business Online

{{Fill DisablePhonePresence Description}}



Below Content Applies To: Skype for Business Server 2015

When set to True, Skype for Business does not take phone calls into consideration when determining your current status.
When set to False, phone calls are taken into consideration when determining your status.
For example, any time you are on the phone your status will automatically be set to Busy.



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisablePICPromptDisplayName
Below Content Applies To: Lync Server 2010, Lync Server 2013

When set to True, any notification dialog box generated when you are added to the Contacts list of a user with an account on a public instant messaging service such as MSN will display that person's SIP address (for example, sip:kenmyer@litwareinc.com).
When set to False, the notification dialog box will use the person's display name (for example, Ken Myer) instead.

This setting is equivalent to the Communications Server 2007 R2 Group Policy setting "Prevent showing the display name of PIC contacts in the notification dialog."



Below Content Applies To: Skype for Business Online

{{Fill DisablePICPromptDisplayName Description}}



Below Content Applies To: Skype for Business Server 2015

When set to True, any notification dialog box generated when you are added to the Contacts list of a user with an account on a public instant messaging service such as MSN will display that person's SIP address (for example, sip:kenmyer@litwareinc.com).
When set to False, the notification dialog box will use the person's display name (for example, Ken Myer) instead.



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisablePoorDeviceWarnings
Below Content Applies To: Lync Server 2010

When set to True, Lync 2010 will not issue warnings (for example, upon startup, in the Tuning Wizard, and in the Conversation window) if an audio or video device is not working correctly.
When set to False, these warnings will be issued.



Below Content Applies To: Lync Server 2013

When set to True, Lync will not issue warnings (for example, upon startup, in the Tuning Wizard, and in the Conversation window) if an audio or video device is not working correctly.
When set to False, these warnings will be issued.



Below Content Applies To: Skype for Business Online

{{Fill DisablePoorDeviceWarnings Description}}



Below Content Applies To: Skype for Business Server 2015

When set to True, Skype for Business will not issue warnings (for example, upon startup, in the Tuning Wizard, and in the Conversation window) if an audio or video device is not working correctly.
When set to False, these warnings will be issued.



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisablePoorNetworkWarnings
Below Content Applies To: Lync Server 2010

When set to True, the network status indicator (which reports the network strength and quality during a Lync 2010 call) does not appear in the Lync 2010 interface.



Below Content Applies To: Lync Server 2013

When set to True, the network status indicator (which reports the network strength and quality during a Lync call) does not appear in the Lync interface.



Below Content Applies To: Skype for Business Online

{{Fill DisablePoorNetworkWarnings Description}}



Below Content Applies To: Skype for Business Server 2015

When set to True, Skype for Business will not display warnings about poor network quality.



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisablePresenceNote
Below Content Applies To: Lync Server 2010, Lync Server 2013

When set to True, any Out of Office message you configure in Microsoft Outlook will not be displayed as part of your presence information.
When set to False, your Out of Office message will be displayed any time a user holds the mouse over your name in their Contacts list.

This setting is equivalent to the Communications Server 2007 R2 Group Policy setting "Disable presence note."



Below Content Applies To: Skype for Business Online

{{Fill DisablePresenceNote Description}}



Below Content Applies To: Skype for Business Server 2015

When set to True, any Out of Office message you configure in Microsoft Outlook will not be displayed as part of your presence information.
When set to False, your Out of Office message will be displayed any time a user holds the mouse over your name in their Contacts list.



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisableRTFIM
Below Content Applies To: Lync Server 2010, Lync Server 2013

When both this setting and the DisableHtmlIm setting are set to True, prevents rich text formatting (for example, different fonts, font sizes, and font colors) from being used in instant messages; instead, all messages sent and received will be converted to plain text format.
When set to False, rich text formatting will be allowed in instant messages.

This setting is equivalent to the Communications Server 2007 R2 Group Policy setting "Prevent rich text in instant messages."



Below Content Applies To: Skype for Business Online

{{Fill DisableRTFIM Description}}



Below Content Applies To: Skype for Business Server 2015

When both this setting and the DisableHtmlIm setting are set to True, prevents rich text formatting (for example, different fonts, font sizes, and font colors) from being used in instant messages; instead, all messages sent and received will be converted to plain text format.
When set to False, rich text formatting will be allowed in instant messages.



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisableSavingIM
Below Content Applies To: Lync Server 2010

When set to True, the options for saving an instant messaging session are removed from the menu bar in the Lync 2010 Conversation window.
When set to False, these options are available in the Conversation window.

Note that setting this value to True removes the menu options that make it easy for users to save instant messaging transcripts.
However, it does not prevent users from copying all the text in a transcript to the clipboard, pasting that text into another application, and then saving the transcript that way.

This setting is equivalent to the Communications Server 2007 R2 Group Policy setting "Prevent users from saving instant messages."



Below Content Applies To: Lync Server 2013

When set to True, the options for saving an instant messaging session are removed from the menu bar in the Lync Conversation window.
When set to False, these options are available in the Conversation window.

Note that setting this value to True removes the menu options that make it easy for users to save instant messaging transcripts.
However, it does not prevent users from copying all the text in a transcript to the clipboard, pasting that text into another application, and then saving the transcript that way.

This setting is equivalent to the Communications Server 2007 R2 Group Policy setting "Prevent users from saving instant messages."



Below Content Applies To: Skype for Business Online

{{Fill DisableSavingIM Description}}



Below Content Applies To: Skype for Business Server 2015

When set to True, the options for saving an instant messaging session are removed from the menu bar in the Skype for Business Conversation window.
When set to False, these options are available in the Conversation window.

Note that setting this value to True removes the menu options that make it easy for users to save instant messaging transcripts.
However, it does not prevent users from copying all the text in a transcript to the clipboard, pasting that text into another application, and then saving the transcript that way.



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisplayPhoto
Below Content Applies To: Lync Server 2010

Determines whether or not photos (of both the user and his or her contacts) will be displayed in Lync 2010.
Valid settings are:

NoPhoto - Photos are not displayed in Lync 2010.

PhotosFromADOnly - Only photos that have been published in Active Directory can be displayed.

AllPhotos - Either Active Directory or custom photos can be displayed.

The default value is AllPhotos.



Below Content Applies To: Lync Server 2013

Determines whether or not photos (of both the user and his or her contacts) will be displayed in Lync.
Valid settings are:

NoPhoto - Photos are not displayed in Lync.

PhotosFromADOnly - Only photos that have been published in Active Directory can be displayed.

AllPhotos - Either Active Directory or custom photos can be displayed.

The default value is AllPhotos.



Below Content Applies To: Skype for Business Online

{{Fill DisplayPhoto Description}}



Below Content Applies To: Skype for Business Server 2015

Determines whether or not photos (of both the user and his or her contacts) will be displayed in Skype for Business.
Valid settings are:

NoPhoto - Photos are not displayed in Skype for Business.

PhotosFromADOnly - Only photos that have been published in Active Directory can be displayed.

AllPhotos - Either Active Directory or custom photos can be displayed.

The default value is AllPhotos.



```yaml
Type: DisplayPhoto
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableAppearOffline
Below Content Applies To: Lync Server 2010

When set to True an additional presence state, Appear Offline, is available in Lync 2010.
This state makes it appear as though the user is offline; however, he or she will actually be online and available to answer phone calls and respond to instant messages.
When set to False, the Appear Offline presence state will not be available in Lync 2010.

This setting is equivalent to the Communications Server 2007 R2 Group Policy setting "Enable the state Appear Offline."



Below Content Applies To: Lync Server 2013

When set to True an additional presence state, Appear Offline, is available in Lync.
This state makes it appear as though the user is offline; however, he or she will actually be online and available to answer phone calls and respond to instant messages.
When set to False, the Appear Offline presence state will not be available in Lync.

This setting is equivalent to the Communications Server 2007 R2 Group Policy setting "Enable the state Appear Offline."



Below Content Applies To: Skype for Business Online

{{Fill EnableAppearOffline Description}}



Below Content Applies To: Skype for Business Server 2015

When set to True an additional presence state, Appear Offline, is available in Skype for Business.
This state makes it appear as though the user is offline; however, he or she will actually be online and available to answer phone calls and respond to instant messages.
When set to False, the Appear Offline presence state will not be available in Skype for Business.



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableCallLogAutoArchiving
Below Content Applies To: Lync Server 2010, Lync Server 2013

When set to True, information about your incoming and outgoing phone calls is automatically saved to the Conversation History folder in Microsoft Outlook.
(The actual call itself is not recorded.
What is recorded is information such as who took part in the call; the length of the call; and whether this was an incoming or an outgoing call.) When set to False, this information is not saved to Outlook.

This setting is equivalent to the Communications Server 2007 R2 Group Policy setting "Enable/disable automatic archiving of call logs to Outlook mailbox."



Below Content Applies To: Skype for Business Online

{{Fill EnableCallLogAutoArchiving Description}}



Below Content Applies To: Skype for Business Server 2015

When set to True, information about your incoming and outgoing phone calls is automatically saved to the Conversation History folder in Microsoft Outlook.
(The actual call itself is not recorded.
What is recorded is information such as who took part in the call; the length of the call; and whether this was an incoming or an outgoing call.) When set to False, this information is not saved to Outlook.



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableClientMusicOnHold
Below Content Applies To: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

When set to True, music will be played any time a caller is placed on hold.
When set to False, music will not be played any time a caller is placed on hold.
The default value is False.



Below Content Applies To: Skype for Business Online

{{Fill EnableClientMusicOnHold Description}}



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableConversationWindowTabs
Below Content Applies To: Lync Server 2010

When set to True, supplemental information related to an instant messaging session will be displayed in a separate browser window.
This type of information is available only for custom applications that use the Microsoft Unified Communications APIs.
For example, customer service or support team personnel can automatically access related information while chatting with someone.

When set to False, supplemental information will not be displayed in a separate browser window.
Although the user can still take part in an instant messaging session he or she will not have access to any additional information that accompanies the session.

This setting is equivalent to the Communications Server 2007 R2 Group Policy setting "Enable conversation window tabs."



Below Content Applies To: Lync Server 2013

When set to True, supplemental information related to an instant messaging session will be displayed in a separate browser window.
This type of information is available only for custom applications that use the Microsoft Unified Communications APIs.
For example, customer service or support team personnel can automatically access related information while chatting with someone.

When set to False, supplemental information will not be displayed in a separate browser window.
Although the user can still take part in an instant messaging session he or she will not have access to any additional information that accompanies the session.

This setting is equivalent to the Communications Server 2007 R2 Group Policy setting "Enable conversation window tabs." This parameter has been deprecated for use with Lync Server 2013 Preview.



Below Content Applies To: Skype for Business Online

{{Fill EnableConversationWindowTabs Description}}



Below Content Applies To: Skype for Business Server 2015

When set to True, supplemental information related to an instant messaging session will be displayed in a separate browser window.
This type of information is available only for custom applications that use the Microsoft Unified Communications APIs.
For example, customer service or support team personnel can automatically access related information while chatting with someone.

When set to False, supplemental information will not be displayed in a separate browser window.
Although the user can still take part in an instant messaging session he or she will not have access to any additional information that accompanies the session.

This parameter has been deprecated for use with Skype for Business Server 2015.



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableEnterpriseCustomizedHelp
Below Content Applies To: Lync Server 2010

When set to True, users who click the Help menu in Lync 2010 will be given custom help set up by the organization.
When set to False, users who click the Help menu will be given the default Lync 2010 product help.

When you enable customized help you must also specify the URL for the custom help website; this is done by using the CustomizedHelpUrl parameter.
If this parameter is not specified, or if the URL is not valid, then users will receive the default product help.



Below Content Applies To: Lync Server 2013

When set to True, users who click the Help menu in Lync will be given custom help set up by the organization.
When set to False, users who click the Help menu will be given the default Lync product help.

When you enable customized help you must also specify a valid URL for the custom help website; this is done by using the CustomizedHelpUrl parameter.
If this parameter is not specified, or if the URL is not valid, errors will likely occur when users try to schedule or join meetings.

This parameter has been deprecated for use with Lync Server 2013 Preview.



Below Content Applies To: Skype for Business Online

{{Fill EnableEnterpriseCustomizedHelp Description}}



Below Content Applies To: Skype for Business Server 2015

When set to True, users who click the Help menu in Skype for Business will be given custom help set up by the organization.

This parameter has been deprecated for use with Skype for Business Server 2015.



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableEventLogging
Below Content Applies To: Lync Server 2010

When set to True, detailed information about Lync 2010 will be recorded in the Application event log.
When set to False, only major events (such as the failure to connect to Lync Server) are recorded in the event log.

This setting is equivalent to the Communications Server 2007 R2 Group Policy setting "Turn on event logging for Communicator."



Below Content Applies To: Lync Server 2013

When set to True, detailed information about Lync will be recorded in the Application event log.
When set to False, only major events (such as the failure to connect to Lync Server) are recorded in the event log.

This setting is equivalent to the Communications Server 2007 R2 Group Policy setting "Turn on event logging for Communicator."



Below Content Applies To: Skype for Business Online

{{Fill EnableEventLogging Description}}



Below Content Applies To: Skype for Business Server 2015

When set to True, detailed information about Skype for Business will be recorded in the Application event log.
When set to False, only major events (such as the failure to connect to Skype for Business Server 2015) are recorded in the event log.



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableExchangeContactSync
Below Content Applies To: Lync Server 2010

When set to True (the default value) Lync 2010 creates a corresponding personal contact in Microsoft Outlook for each person on a user's Lync 2010 Contacts list.



Below Content Applies To: Lync Server 2013

When set to True (the default value) Lync creates a corresponding personal contact in Microsoft Outlook for each person on a user's Lync Contacts list.



Below Content Applies To: Skype for Business Online

{{Fill EnableExchangeContactSync Description}}



Below Content Applies To: Skype for Business Server 2015

When set to True (the default value) Skype for Business creates a corresponding personal contact in Microsoft Outlook for each person on a user's Skype for Business Contacts list.



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableExchangeDelegateSync
Below Content Applies To: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

When set to True, delegates that a user has configured in Microsoft Exchange will be allowed to schedule meetings for that user.



Below Content Applies To: Skype for Business Online

{{Fill EnableExchangeDelegateSync Description}}



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableFullScreenVideo
Below Content Applies To: Lync Server 2010

When set to True, this parameter does two things: 1) enables full-screen video (with the correct aspect ratio) for Lync 2010 calls; and, 2) disables video preview for Lync 2010 calls.
When set to False, full-screen video is not available in Lync 2010, but video preview is available.

This setting is equivalent to the Communications Server 2007 R2 Group Policy setting "Enable full screen video and video preview disabled for all OC video calls."



Below Content Applies To: Lync Server 2013

When set to True, this parameter does two things: 1) enables full-screen video (with the correct aspect ratio) for Lync calls; and, 2) disables video preview for Lync calls.
When set to False, full-screen video is not available in Lync, but video preview is available.

This setting is equivalent to the Communications Server 2007 R2 Group Policy setting "Enable full screen video and video preview disabled for all OC video calls."



Below Content Applies To: Skype for Business Online

{{Fill EnableFullScreenVideo Description}}



Below Content Applies To: Skype for Business Server 2015

When set to True, this parameter does two things: 1) enables full-screen video (with the correct aspect ratio) for Skype for Business calls; and, 2) disables video preview for Skype for Business calls.
When set to False, full-screen video is not available in Skype for Business, but video preview is available.



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableHotdesking
Below Content Applies To: Lync Server 2010

When set to True, enables users to log on to a phone running Lync 2010 Phone Edition in a shared workspace by using their Lync Server account.
(Among other things, this provides the user access to his or her contacts.) When set to False, users are not allowed to log on to a phone by using their own credentials.

Note that this setting applies only to common area phones and not to users.
When set to True and applied to a common area phone, any user will be able to log on to that phone using his or her credentials.
When set to False, no users will be allowed to log on to a common area phone where this policy setting has been applied.



Below Content Applies To: Lync Server 2013

When set to True, enables users to log on to a phone running Lync Phone Edition in a shared workspace by using their Lync Server account.
(Among other things, this provides the user access to his or her contacts.) When set to False, users are not allowed to log on to a phone by using their own credentials.

Note that this setting applies only to common area phones and not to users.
When set to True and applied to a common area phone, any user will be able to log on to that phone using his or her credentials.
When set to False, no users will be allowed to log on to a common area phone where this policy setting has been applied.



Below Content Applies To: Skype for Business Online

{{Fill EnableHotdesking Description}}



Below Content Applies To: Skype for Business Server 2015

When set to True, enables users to log on to a phone running Skype for Business Phone Edition in a shared workspace by using their Skype for Business Server 2015 account.
(Among other things, this provides the user access to his or her contacts.) When set to False, users are not allowed to log on to a phone by using their own credentials.

Note that this setting applies only to common area phones and not to users.
When set to True and applied to a common area phone, any user will be able to log on to that phone using his or her credentials.
When set to False, no users will be allowed to log on to a common area phone where this policy setting has been applied.



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableIMAutoArchiving
Below Content Applies To: Lync Server 2010, Lync Server 2013

When set to True, a transcript of every instant messaging session that a user takes part in will be saved to the Conversation History folder in Microsoft Outlook.
When set to False, these transcripts will not be saved automatically.
(However, users will have the option to manually save instant messaging transcripts.)

This setting is equivalent to the Communications Server 2007 R2 Group Policy setting "Enable/disable automatic archiving of IM conversations to Outlook mailbox."



Below Content Applies To: Skype for Business Online

{{Fill EnableIMAutoArchiving Description}}



Below Content Applies To: Skype for Business Server 2015

When set to True, a transcript of every instant messaging session that a user takes part in will be saved to the Conversation History folder in Microsoft Outlook.
When set to False, these transcripts will not be saved automatically.
(However, users will have the option to manually save instant messaging transcripts.)



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableSQMData
Below Content Applies To: Lync Server 2010

The Customer Experience Improvement Program (CEIP) is designed to help Microsoft collect data on the real-world use of Lync 2010 When a user is enrolled in CEIP, then each time the user runs Lync 2010 information about what that user does, and how often they do it, will be sent back to Microsoft, stored in a database, and then analyzed to help identify usage trends.

When EnableSQMData is set to True, the user will not automatically be enrolled in the Customer Experience Program.
However, Lync 2010 will provide the user with the option to join the program.

When set to False, the user will not be enrolled in the Customer Experience Improvement Program.
In addition, Lync 2010 will not give users the option of  joining the program.
The only way for a user to participate in the CEIP program is for EnableSQMData to be set to True and the user to then manually opt-in to the program.

Note that no personally-identifiable information is sent to the CEIP.
The CEIP does not keep track of such things as who you send instant messages to, and vice-versa.
Instead, the program tracks information such as how often people use Lync 2010 to transfer files, or the average number of contacts that people have on their Contacts List.

This setting is equivalent to the Office Communications Server 2007 R2 Group Policy setting "Specify instrumentation."



Below Content Applies To: Lync Server 2013

Note: This setting has been deprecated for Lync Server 2013 Preview.

The Customer Experience Improvement Program (CEIP) is designed to help Microsoft collect data on the real-world use of Lync.When a user is enrolled in CEIP, then each time the user runs Lync information about what that user does, and how often they do it, will be sent back to Microsoft, stored in a database, and then analyzed to help identify usage trends.

When EnableSQMData is set to True, the user will not automatically be enrolled in the Customer Experience Program.
However, Lync will provide the user with the option to join the program.

When set to False, the user will not be enrolled in the Customer Experience Improvement Program.
In addition, Lync will not give users the option of joining the program.
The only way for a user to participate in the CEIP program is for EnableSQMData to be set to True and the user to then manually opt-in to the program.

Note that no personally-identifiable information is sent to the CEIP.
The CEIP does not keep track of such things as who you send instant messages to, and vice-versa.
Instead, the program tracks information such as how often people use Lync to transfer files, or the average number of contacts that people have on their Contacts List.

This setting is equivalent to the Office Communications Server 2007 R2 Group Policy setting "Specify instrumentation."



Below Content Applies To: Skype for Business Online

{{Fill EnableSQMData Description}}



Below Content Applies To: Skype for Business Server 2015

Note: This setting has been deprecated for Skype for Business Server 2015.

When EnableSQMData is set to True, the user will not automatically be enrolled in the Customer Experience Program.
However, Skype for Business will provide the user with the option to join the program.

When set to False, the user will not be enrolled in the Customer Experience Improvement Program.
In addition, Skype for Business will not give users the option of joining the program.
The only way for a user to participate in the CEIP program is for EnableSQMData to be set to True and the user to then manually opt-in to the program.



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableTracing
Below Content Applies To: Lync Server 2010

When set to True, software tracing will be enabled in Lync 2010; when set to False, software tracing will be disabled.
Software tracing involves keeping a detailed record of everything that a program does (including tracking API calls).
Tracing is mostly useful to developers and to application support personnel.

This setting is equivalent to the Communications Server 2007 R2 Group Policy setting "Turn on tracing for Communicator."



Below Content Applies To: Lync Server 2013

When set to True, software tracing will be enabled in Lync; when set to False, software tracing will be disabled.
Software tracing involves keeping a detailed record of everything that a program does (including tracking API calls).
Tracing is mostly useful to developers and to application support personnel.

This setting is equivalent to the Communications Server 2007 R2 Group Policy setting "Turn on tracing for Communicator."



Below Content Applies To: Skype for Business Online

{{Fill EnableTracing Description}}



Below Content Applies To: Skype for Business Server 2015

When set to True, software tracing will be enabled in Skype for Business; when set to False, software tracing will be disabled.
Software tracing involves keeping a detailed record of everything that a program does (including tracking API calls).
Tracing is mostly useful to developers and to application support personnel.



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableUnencryptedFileTransfer
Below Content Applies To: Lync Server 2010, Lync Server 2013

When set to True, users will be allowed to exchange files with external users whose instant messaging software does not support encrypted file transfers.
When set to False, users will only be able to exchange files with external users who have software that supports encrypted file transfers.

This setting is equivalent to the Communications Server 2007 R2 Group Policy setting "Allow transferring unencrypted files."



Below Content Applies To: Skype for Business Online

{{Fill EnableUnencryptedFileTransfer Description}}



Below Content Applies To: Skype for Business Server 2015

When set to True, users will be allowed to exchange files with external users whose instant messaging software does not support encrypted file transfers.
When set to False, users will only be able to exchange files with external users who have software that supports encrypted file transfers.



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableVOIPCallDefault
Below Content Applies To: Lync Server 2010

When set to True, a Lync 2010 call will be placed any time a user employs the click-to-call feature.



Below Content Applies To: Lync Server 2013

When set to True, a Lync call will be placed any time a user employs the click-to-call feature.

This policy setting only affects the initial state of the click-to-call feature.
If the user modifies the value of the click-to-call setting then the user-selected value will override this policy setting.
After a user has modified the click-to-call setting that setting will remain in use and will not be affected by the EnableVOIPCallDefault policy.



Below Content Applies To: Skype for Business Online

{{Fill EnableVOIPCallDefault Description}}



Below Content Applies To: Skype for Business Server 2015

When set to True, a Skype for Business call will be placed any time a user employs the click-to-call feature.

This policy setting only affects the initial state of the click-to-call feature.
If the user modifies the value of the click-to-call setting then the user-selected value will override this policy setting.
After a user has modified the click-to-call setting that setting will remain in use and will not be affected by the EnableVOIPCallDefault policy.



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExcludedContactFolders
Below Content Applies To: Lync Server 2010

Indicates which Microsoft Outlook contact folders (if any) should not be searched any time Lync 2010 searches for new contacts.
Multiple folders can be specified by separating the folder names using semicolons; for example: -ExcludedContactFolders "SenderPhotoContacts;OtherContacts".



Below Content Applies To: Lync Server 2013

Indicates which Microsoft Outlook contact folders (if any) should not be searched any time Lync searches for new contacts.
Multiple folders can be specified by separating the folder names using semicolons; for example: -ExcludedContactFolders "SenderPhotoContacts;OtherContacts".



Below Content Applies To: Skype for Business Online

{{Fill ExcludedContactFolders Description}}



Below Content Applies To: Skype for Business Server 2015

Indicates which Microsoft Outlook contact folders (if any) should not be searched any time Skype for Business searches for new contacts.
Multiple folders can be specified by separating the folder names using semicolons; for example, -ExcludedContactFolders "SenderPhotoContacts;OtherContacts".



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HotdeskingTimeout
Below Content Applies To: Lync Server 2010

Timeout interval for a user logged on to a hot-desked phone.
(A hot-desked phone is a phone running Lync 2010 Phone Edition that is located in a shared workspace, and that users can log on to by using their Lync Server account.) The hot-desk timeout specifies the number of minutes that can elapse before a user is automatically logged off of a hot-desked phone.

Note that this policy setting applies only to common area phones and not to users.



Below Content Applies To: Lync Server 2013

Timeout interval for a user logged on to a hot-desked phone.
(A hot-desked phone is a phone running Lync Phone Edition that is located in a shared workspace, and that users can log on to by using their Lync Server account.) The hot-desk timeout specifies the number of minutes that can elapse before a user is automatically logged off of a hot-desked phone.
When specifying a hot desking timeout you must use the format hours:minutes:seconds.
For example, this syntax sets the hot desking timeout interval to 45 minutes:

-HotdeskingTimeout 00:45:00

Note that this policy setting applies only to common area phones and not to users.
The default value is 5 minutes (00:05:00), and the minimum value is 30 seconds (00:00:30).



Below Content Applies To: Skype for Business Online

{{Fill HotdeskingTimeout Description}}



Below Content Applies To: Skype for Business Server 2015

Timeout interval for a user logged on to a hot-desked phone.
(A hot-desked phone is a phone running Skype for Business Phone Edition that is located in a shared workspace, and that users can log on to by using their Skype for Business Server 2015 account.) The hot-desk timeout specifies the number of minutes that can elapse before a user is automatically logged off of a hot-desked phone.
When specifying a hot desking timeout you must use the format hours:minutes:seconds.
For example, this syntax sets the hot desking timeout interval to 45 minutes:

-HotdeskingTimeout 00:45:00

Note that this policy setting applies only to common area phones and not to users.
The default value is 5 minutes (00:05:00), and the minimum value is 30 seconds (00:00:30).



```yaml
Type: TimeSpan
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IMWarning
Below Content Applies To: Lync Server 2010

When configured, the specified message appears in the Conversation window each time a user takes part in an instant messaging session.
For example, if IMWarning is set to "All information is the property of Litware, Inc." then that message will appear in the Conversation window each time a user takes part in an instant messaging session.

If set to a null value ($Null), then no message appears in the Conversation window.

This setting is equivalent to the Communications Server 2007 R2 Group Policy setting "Warning text."



Below Content Applies To: Lync Server 2013

When configured, the specified message appears in the Conversation window each time a user takes part in an instant messaging session.
For example, if IMWarning is set to "All information is the property of Litwareinc" then that message will appear in the Conversation window each time a user takes part in an instant messaging session.

If set to a null value ($Null), then no message appears in the Conversation window.

Your warning message should be limited to 256 characters, and can only contain plain text.
You cannot use any formatting (such as boldface or italics) and you cannot clickable URLs within the text.

This setting is equivalent to the Communications Server 2007 R2 Group Policy setting "Warning text."



Below Content Applies To: Skype for Business Online

{{Fill IMWarning Description}}



Below Content Applies To: Skype for Business Server 2015

When configured, the specified message appears in the Conversation window each time a user takes part in an instant messaging session.
For example, if IMWarning is set to "All information is the property of Litwareinc" then that message will appear in the Conversation window each time a user takes part in an instant messaging session.

If set to a null value ($Null), then no message appears in the Conversation window.

Your warning message should be limited to 256 characters, and can only contain plain text.
You cannot use any formatting (such as boldface or italics) and you cannot clickable URLs within the text.



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MAPIPollInterval
Below Content Applies To: Lync Server 2010

For users of Microsoft Exchange Server 2003, MAPIPollInterval specifies how often Lync 2010 retrieves calendar data from the Exchange public folders.
MAPIPollInterval can be set to any integer value between 5 minutes and 480 minutes (8 hours); inclusive.
The default value is 30 minutes.

Note that this setting does not apply to users whose email account is on Microsoft Exchange Server 2007 or later.
For those users, calendar retrieval is managed using the WebServicePollInterval property.

This setting is equivalent to the Office Communications Server 2007 R2 Group Policy setting "Time interval to load calendar data from MAPI provider."



Below Content Applies To: Lync Server 2013

Important: This parameter has been deprecated for use with Lync Server 2013 Preview.

For users of Microsoft Exchange Server 2003, MAPIPollInterval specifies how often Lync retrieves calendar data from the Exchange public folders.
MAPIPollInterval can be set to any value between 1 second and 1 hour; inclusive.
To configure the MAPI poll interval, use the format hours:minutes:seconds.
For example, this command sets the MAPI poll interval to 45 minutes:

-MapiPollInterval 00:45:00

Note that this setting does not apply to users whose email account is on Microsoft Exchange Server 2010 or Microsoft Exchange Server 2007.
For those users, calendar retrieval is managed using WebServicePollInterval

This setting is equivalent to the Office Communications Server 2007 R2 Group Policy setting "Time interval to load calendar data from MAPI provider."



Below Content Applies To: Skype for Business Online

{{Fill MAPIPollInterval Description}}



Below Content Applies To: Skype for Business Server 2015

Important: This parameter has been deprecated for use with Skype for Business Server 2015.

For users of Microsoft Exchange Server 2003, MAPIPollInterval specifies how often Skype for Business retrieves calendar data from the Exchange public folders.
MAPIPollInterval can be set to any value between 1 second and 1 hour; inclusive.
To configure the MAPI poll interval, use the format hours:minutes:seconds.
For example, this command sets the MAPI poll interval to 45 minutes:

-MapiPollInterval 00:45:00



```yaml
Type: TimeSpan
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaximumDGsAllowedInContactList
Below Content Applies To: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Indicates the maximum number of distribution groups that a user can configure as a contact.
MaximumDGsAllowedInContactList can be set to any integer value between 0 and 64, inclusive.
The default value is 10.



Below Content Applies To: Skype for Business Online

{{Fill MaximumDGsAllowedInContactList Description}}



```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaximumNumberOfContacts
Below Content Applies To: Lync Server 2010, Lync Server 2013

Indicates the maximum number of contacts a user is allowed to have.
The maximum contacts can be set to any integer value between 0 and 1000, inclusive.
When set to 0, that prevents the user from having any contacts.

This setting is equivalent to the Communications Server 2007 R2 Group Policy setting "Maximum allowed number of contacts."



Below Content Applies To: Skype for Business Online

{{Fill MaximumNumberOfContacts Description}}



Below Content Applies To: Skype for Business Server 2015

Indicates the maximum number of contacts a user is allowed to have.
The maximum contacts can be set to any integer value between 0 and 1000, inclusive.
When set to 0, that prevents the user from having any contacts.



```yaml
Type: UInt16
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MusicOnHoldAudioFile
Below Content Applies To: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Path to the audio file to be played when a caller is placed on hold.
If a value is configured for this property, then music on hold will be enabled and users will not be allowed to disable the feature.
If no value is configured for this property, then users can specify their own music-on-hold file, provided that EnableClientMusicOnHold is set to True.



Below Content Applies To: Skype for Business Online

{{Fill MusicOnHoldAudioFile Description}}



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -P2PAppSharingEncryption
Below Content Applies To: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Indicates whether or not desktop and application sharing data exchanged during a peer-to-peer conversation is encrypted.
Allowed values are:

Supported.
Desktop and application sharing data will be encrypted, if possible.

Enforced.
Desktop and application sharing data must be encrypted.
If the data cannot be encrypted, then desktop and application sharing will not be enabled for the conversation.

NotSupported.
Desktop and application sharing data will not be encrypted.



Below Content Applies To: Skype for Business Online

{{Fill P2PAppSharingEncryption Description}}



```yaml
Type: P2PAppSharingEncryption
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PlayAbbreviatedDialTone
Below Content Applies To: Lync Server 2010

When set to True, a 3-second dial tone will be played any time a Lync 2010-compatible handset is taken off the hook.
(A Lync 2010 handset looks like a standard telephone, but plugs into a USB port on a computer and is used to make Lync 2010 calls rather than "regular" phone calls.) When set to False, a 30-second dial tone is played any time a Lync 2010-compatible handset is taken off the hook.

This setting is equivalent to the Communications Server 2007 R2 Group Policy setting "Play abbreviated dial tone."



Below Content Applies To: Lync Server 2013

When set to True, a 3-second dial tone will be played any time a Lync-compatible handset is taken off the hook.
(A Lync handset looks like a standard telephone, but plugs into a USB port on a computer and is used to make Lync calls rather than "regular" phone calls.) When set to False, a 30-second dial tone is played any time a Lync-compatible handset is taken off the hook.

This setting is equivalent to the Communications Server 2007 R2 Group Policy setting "Play abbreviated dial tone."



Below Content Applies To: Skype for Business Online

{{Fill PlayAbbreviatedDialTone Description}}



Below Content Applies To: Skype for Business Server 2015

When set to True, a 3-second dial tone will be played any time a Skype for Business-compatible handset is taken off the hook.
(A Skype for Business handset looks like a standard telephone, but plugs into a USB port on a computer and is used to make Skype for Business calls rather than "regular" phone calls.) When set to False, a 30-second dial tone is played any time a Skype for Business-compatible handset is taken off the hook.



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PolicyEntry
Below Content Applies To: Lync Server 2010

Provides a way to add settings not covered by the default parameters.
For example, in the pre-beta version of Lync 2010 it was possible to add a Send Feedback option to Lync 2010.
That was done by using code similar to this:

$x = New-CsClientPolicyEntry -Name "OnlineFeedbackURL" -Value "http://www.litwareinc.com/feedback"Set-CsClientPolicy -Identity global -PolicyEntry @{Add=$x}

For more details and examples, see the New-CsClientPolicyEntry help topic.



Below Content Applies To: Lync Server 2013

Provides a way to add settings not covered by the default parameters.
For example, when testing pre-release versions Microsoft Lync Server 2010 it was possible to add a Send Feedback option to Microsoft Lync 2010.
That was done by using code similar to this:

$x = New-CsClientPolicyEntry -Name "OnlineFeedbackURL" -Value "http://www.litwareinc.com/feedback"Set-CsClientPolicy -Identity global -PolicyEntry @{Add=$x}

For more details and examples, see the New-CsClientPolicyEntry help topic.



Below Content Applies To: Skype for Business Online

{{Fill PolicyEntry Description}}



Below Content Applies To: Skype for Business Server 2015

Provides a way to add settings not covered by the default parameters.
For example, when testing pre-release versions of Lync 2010 it was possible to add a Send Feedback option to the user interface.
That was done by using code similar to this:

$x = New-CsClientPolicyEntry -Name "OnlineFeedbackURL" -Value "http://www.litwareinc.com/feedback"Set-CsClientPolicy -Identity global -PolicyEntry @{Add=$x}

For more details and examples, see the New-CsClientPolicyEntry cmdlet help topic.



```yaml
Type: PSListModifier
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SearchPrefixFlags
Below Content Applies To: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Represents the Address Book attributes that should be used any time a user searches for a new contact.
The search prefix flags are constructed as a binary number like 11101111, in which a 1 indicates that the attribute should be searched and a 0 indicates that the attribute should not be searched.
The attributes in the binary value are (from right to left):

Primary email address

Email alias

All email addresses

Company

Display name

First name

Last name

The binary value 1110111 means that all attributes should be searched except attribute 4: Company.
To search only last name, first name, and display name you would construct this value:

1110000

After the binary value has been constructed, it must then be converted to a decimal value before being assigned to SearchPrefixFlags.
To convert a binary number to a decimal number, you can use the a Windows PowerShell command similar to this:

\[Convert\]::ToInt32("1110111", 2)



Below Content Applies To: Skype for Business Online

{{Fill SearchPrefixFlags Description}}



```yaml
Type: UInt16
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ShowManagePrivacyRelationships
Below Content Applies To: Lync Server 2010

When set to True, shows the Relationships option in the Lync 2010 Contacts list window.
When set the True, hides the Relationships option.

The default value is False.



Below Content Applies To: Lync Server 2013

When set to True, shows the Relationships option in the Lync Contacts list window.
When set to False, hides the Relationships option.

The default value is False.



Below Content Applies To: Skype for Business Online

{{Fill ShowManagePrivacyRelationships Description}}



Below Content Applies To: Skype for Business Server 2015

When set to True, shows the Relationships option in the Skype for Business Contacts list window.
When set to False, hides the Relationships option.

Note that this setting applies only to Lync 2010.
Skype for Business will not show these relationships even if ShowManagePrivacyRelationships has been set to True.

The default value is False.



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ShowRecentContacts
Below Content Applies To: Lync Server 2010

When set to True, the Contacts list will include an auto-generated category named Frequent Contacts.
When set to False, the Frequent Contacts category will not be auto-generated.

The default value is True.



Below Content Applies To: Lync Server 2013

This parameter has no effect on the client.



Below Content Applies To: Skype for Business Online

{{Fill ShowRecentContacts Description}}



Below Content Applies To: Skype for Business Server 2015

This parameter currently has no effect on the client.



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ShowSharepointPhotoEditLink
Below Content Applies To: Lync Server 2010

If set to True, Lync 2010 will include a link that enables users to edit the personal photo stored on their Microsoft SharePoint My Site.
The default value is False, which means that Lync 2010 will not include a link to the SharePoint My Site.



Below Content Applies To: Lync Server 2013

If set to True, Lync will include a link that enables users to edit the personal photo stored on their Microsoft SharePoint My Site.
The default value is False, which means that Lync will not include a link to the SharePoint My Site.



Below Content Applies To: Skype for Business Online

{{Fill ShowSharepointPhotoEditLink Description}}



Below Content Applies To: Skype for Business Server 2015

If set to True, Skype for Business will include a link that enables users to edit the personal photo stored on their SharePoint My Site.
The default value is False, which means that Skype for Business will not include a link to the SharePoint My Site.



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SPSearchCenterExternalURL
Below Content Applies To: Lync Server 2010

External URL for the Microsoft SharePoint site used for keyword searches (also known as expert searches).
This URL will appear at the bottom of any keyword search results that appear in Lync 2010.
If the user clicks this URL, his or her web browser will open up to the SharePoint site, giving the user the opportunity to conduct searches using the search capabilities of SharePoint.
(SharePoint offers more search options than Lync 2010 does.)

SPSearchCenterExternalURL represents the URL for external users; that is, for users logging on from outside the organization's firewall.
The parameter SPSearchCenterInternalURL is for users who log on from inside the firewall.



Below Content Applies To: Lync Server 2013

External URL for the Microsoft SharePoint site used for keyword searches (also known as expert searches).
This URL will appear at the bottom of any keyword search results that appear in Lync.
If the user clicks this URL, his or her web browser will open up to the SharePoint site, giving the user the opportunity to conduct searches using the search capabilities of SharePoint.
(SharePoint offers more search options than Lync does.)

SPSearchCenterExternalURL represents the URL for external users; that is, for users logging on from outside the organization's firewall.
The parameter SPSearchCenterInternalURL is for users who log on from inside the firewall.



Below Content Applies To: Skype for Business Online

{{Fill SPSearchCenterExternalURL Description}}



Below Content Applies To: Skype for Business Server 2015

External URL for the SharePoint site used for keyword searches (also known as expert searches).
This URL will appear at the bottom of any keyword search results that appear in Skype for Business.
If the user clicks this URL, his or her web browser will open up to the SharePoint site, giving the user the opportunity to conduct searches using the search capabilities of SharePoint.
(SharePoint offers more search options than does Skype for Business.)

SPSearchCenterExternalURL represents the URL for external users; that is, for users logging on from outside the organization's firewall.
The parameter SPSearchCenterInternalURL is for users who log on from inside the firewall.



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SPSearchCenterInternalURL
Below Content Applies To: Lync Server 2010

Internal URL for the Microsoft SharePoint site used for keyword searches (also known as expert searches).
This URL will appear at the bottom of any keyword search results that appear in Lync 2010.
If the user clicks this URL, his or her web browser will open up to the SharePoint site, giving the user the opportunity to conduct searches using the search capabilities of SharePoint.
(SharePoint offers more search options than Lync 2010 does.)

SPSearchCenterInternalURL represents the URL for internal users; that is, for users logging on from inside the organization's firewall.
The parameter SPSearchCenterExternalURL is for users who log on from outside the firewall.



Below Content Applies To: Lync Server 2013

Internal URL for the Microsoft SharePoint site used for keyword searches (also known as expert searches).
This URL will appear at the bottom of any keyword search results that appear in Lync.
If the user clicks this URL, his or her web browser will open up to the SharePoint site, giving the user the opportunity to conduct searches using the search capabilities of SharePoint.
(SharePoint offers more search options than Lync does.)

SPSearchCenterInternalURL represents the URL for internal users; that is, for users logging on from inside the organization's firewall.
The parameter SPSearchCenterExternalURL is for users who log on from outside the firewall.



Below Content Applies To: Skype for Business Online

{{Fill SPSearchCenterInternalURL Description}}



Below Content Applies To: Skype for Business Server 2015

Internal URL for the SharePoint site used for keyword searches (also known as expert searches).
This URL will appear at the bottom of any keyword search results that appear in Skype for Business.
If the user clicks this URL, his or her web browser will open up to the SharePoint site, giving the user the opportunity to conduct searches using the search capabilities of SharePoint.
(SharePoint offers more search options than Skype for Business does.)

SPSearchCenterInternalURL represents the URL for internal users; that is, for users logging on from inside the organization's firewall.
The parameter SPSearchCenterExternalURL is for users who log on from outside the firewall.



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SPSearchExternalURL
Below Content Applies To: Lync Server 2010

External URL for the Microsoft SharePoint site used for keyword searches (also known as expert searches).
Lync 2010 will use the SharePoint site located at this URL any time an external user (that is, a user who has accessed the system from outside the organization's firewall) conducts a keyword search.



Below Content Applies To: Lync Server 2013

External URL for the Microsoft SharePoint site used for keyword searches (also known as expert searches).
Lync will use the SharePoint site located at this URL any time an external user (that is, a user who has accessed the system from outside the organization's firewall) conducts a keyword search.



Below Content Applies To: Skype for Business Online

{{Fill SPSearchExternalURL Description}}



Below Content Applies To: Skype for Business Server 2015

External URL for the SharePoint site used for keyword searches (also known as expert searches).
Skype for Business will use the SharePoint site located at this URL any time an external user (that is, a user who has accessed the system from outside the organization's firewall) conducts a keyword search.



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SPSearchInternalURL
Below Content Applies To: Lync Server 2010

Internal URL for the Microsoft SharePoint site used for keyword searches (also known as expert searches).
Lync 2010 will use the SharePoint site located at this URL any time an internal user (that is, a user who has logged on from inside the organization's firewall) conducts a keyword search.



Below Content Applies To: Lync Server 2013

Internal URL for the Microsoft SharePoint site used for keyword searches (also known as expert searches).
Lync will use the SharePoint site located at this URL any time an internal user (that is, a user who has logged on from inside the organization's firewall) conducts a keyword search.



Below Content Applies To: Skype for Business Online

{{Fill SPSearchInternalURL Description}}



Below Content Applies To: Skype for Business Server 2015

Internal URL for the SharePoint site used for keyword searches (also known as expert searches).
Skype for Business will use the SharePoint site located at this URL any time an internal user (that is, a user who has logged on from inside the organization's firewall) conducts a keyword search.



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TabURL
Below Content Applies To: Lync Server 2010

Specifies the location of the XML file used to create custom tabs located at the bottom of the Lync 2010 Contacts list window.
Custom tabs provide access to webpage (for example, help team webpage) from within Lync 2010.

This setting is equivalent to the Communications Server 2007 R2 Group Policy setting "Tab URL."



Below Content Applies To: Lync Server 2013

Specifies the location of the XML file used to create custom tabs located at the bottom of the Lync Contacts list window.
Custom tabs provide access to webpage (for example, help team webpage) from within Lync.
This parameter has been deprecated for use with Lync Server 2013 Preview.

This setting is equivalent to the Communications Server 2007 R2 Group Policy setting "Tab URL."



Below Content Applies To: Skype for Business Online

{{Fill TabURL Description}}



Below Content Applies To: Skype for Business Server 2015

Specifies the location of the XML file used to create custom tabs located at the bottom of the Skype for Business Contacts list window.
This parameter has been deprecated for use with Skype for Business Server 2015.



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WebServicePollInterval
Below Content Applies To: Lync Server 2010

For users of Microsoft Exchange Server 2007 and later versions of the product, WebServicePollInterval specifies how often Lync 2010 retrieves calendar data from Microsoft Exchange Server Web Services.
WebServicePollInterval can be set to any integer value between 5 minutes and 480 minutes (8 hours); inclusive.
The default value is 30 minutes.

Note that this setting does not apply to users whose email account is on Exchange 2003.
For those users, calendar retrieval is managed using MAPIPollInterval.

This setting is equivalent to the Communications Server 2007 R2 Group Policy setting "Time interval to load calendar data from Web service provider."



Below Content Applies To: Lync Server 2013

For users of Microsoft Exchange Server 2007 and later versions of the product, WebServicePollInterval specifies how often Lync retrieves calendar data from Microsoft Exchange Server Web Services.
WebServicePollInterval can be set to any value between 1 second and 1 hour; inclusive.
To configure the Web Service poll interval, use the format hours:minutes:seconds.
For example, this command sets the Web Service poll interval to 45 minutes:

-WebServicePollInterval 00:45:00

Note that this setting does not apply to users whose email account is on Exchange 2003.
For those users, calendar retrieval is managed using MAPIPollInterval.

This setting is equivalent to the Communications Server 2007 R2 Group Policy setting "Time interval to load calendar data from Web service provider."



Below Content Applies To: Skype for Business Online

{{Fill WebServicePollInterval Description}}



Below Content Applies To: Skype for Business Server 2015

For users of Microsoft Exchange Server 2007 and later versions of the product, WebServicePollInterval specifies how often Skype for Business retrieves calendar data from Microsoft Exchange Server Web Services.
WebServicePollInterval can be set to any value between 1 second and 1 hour; inclusive.
To configure the Web Service poll interval, use the format hours:minutes:seconds.
For example, this command sets the Web Service poll interval to 45 minutes:

-WebServicePollInterval 00:45:00

Note that this setting does not apply to users whose email account is on Exchange 2003.
For those users, calendar retrieval is managed using MAPIPollInterval.



```yaml
Type: TimeSpan
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Below Content Applies To: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Suppresses the display of any non-fatal error message that might occur when running the command.



Below Content Applies To: Skype for Business Online

{{Fill Force Description}}



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InMemory
Below Content Applies To: Lync Server 2010, Lync Server 2013

Creates an object reference without actually committing the object as a permanent change.
If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set- cmdlet.



Below Content Applies To: Skype for Business Online

{{Fill InMemory Description}}



Below Content Applies To: Skype for Business Server 2015

Creates an object reference without actually committing the object as a permanent change.
If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set-\<cmdlet\>.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Below Content Applies To: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Describes what would happen if you executed the command without actually executing the command.



Below Content Applies To: Skype for Business Online

Shows what would happen if the cmdlet runs.
The cmdlet is not run.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Below Content Applies To: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Prompts you for confirmation before executing the command.



Below Content Applies To: Skype for Business Online

Prompts you for confirmation before running the cmdlet.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisableMeetingSubjectAndLocation
Below Content Applies To: Lync Server 2010, Skype for Business Online

{{Fill DisableMeetingSubjectAndLocation Description}}



Below Content Applies To: Lync Server 2013

When set to True, detailed information about a meeting -- namely, the meeting subject and the location where the meeting is being held -- will be displayed as a tooltip when you view free/busy information in a contact card.
When set the False, this detailed information will not be displayed.
To completely prevent the display of meeting-related information you should also set DisableCalendarPresence to True.

This setting is equivalent to the Communications Server 2007 R2 Group Policy setting "Disable publishing meeting subject and location information."



Below Content Applies To: Skype for Business Server 2015

When set to False, detailed information about a meeting -- namely, the meeting subject and the location where the meeting is being held -- will be displayed as a tooltip when you view free/busy information in a contact card.
When set to True, this detailed information will not be displayed.
To completely prevent the display of meeting-related information you should also set DisableCalendarPresence to True.



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableNotificationForNewSubscribers
Below Content Applies To: Lync Server 2010, Skype for Business Online

{{Fill EnableNotificationForNewSubscribers Description}}



Below Content Applies To: Lync Server 2013

When set to True, any time you are added to someone's Contacts list you will receive notification that you have been added to the list.
In addition, the notification dialog box will provide options for you to add this person to your Contacts list, or to block them from viewing your presence information.
When set to False, you will not be notified if you are added to someone's Contacts list.

This setting is equivalent to the Office Communications Server 2007 R2 Group Policy setting "Show notification for new presence subscribers."



Below Content Applies To: Skype for Business Server 2015

When set to True, any time you are added to someone's Contacts list you will receive notification that you have been added to the list.
In addition, the notification dialog box will provide options for you to add this person to your Contacts list, or to block them from viewing your presence information.
When set to False, you will not be notified if you are added to someone's Contacts list.



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableURL
Below Content Applies To: Lync Server 2010, Lync Server 2013

When set to True, hyperlinks embedded in an instant message will be "clickable;" that is, users can click that link and their web browser will open to the specified location.
When set to False, hyperlinks will appear in instant messages as plain text.
To navigate to the location, users will need to copy the link text and paste it into their web browser.

This setting is equivalent to the Communications Server 2007 R2 Group Policy setting "Allow hyperlinks in instant messages."



Below Content Applies To: Skype for Business Online

{{Fill EnableURL Description}}



Below Content Applies To: Skype for Business Server 2015

When set to True, hyperlinks embedded in an instant message will be "clickable;" that is, users can click that link and their web browser will open to the specified location.
When set to False, hyperlinks will appear in instant messages as plain text.
To navigate to the location, users will need to copy the link text and paste it into their web browser.



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxPhotoSizeKB
Below Content Applies To: Lync Server 2010

Indicates the maximum size (in kilobytes) for photos displayed in Lync 2010.
Setting the MaxPhotoSize to 0 prevents any photos from being displayed in Lync 2010.

The default value is 10 kilobytes.



Below Content Applies To: Lync Server 2013

Indicates the maximum size (in kilobytes) for photos displayed in Lync.
Setting the MaxPhotoSize to 0 prevents any photos from being displayed in Lync.

The default value is 30 kilobytes.



Below Content Applies To: Skype for Business Online

{{Fill MaxPhotoSizeKB Description}}



Below Content Applies To: Skype for Business Server 2015

Indicates the maximum size (in kilobytes) for photos displayed in Skype for Business.

The default value is 30 kilobytes.



```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableMediaRedirection
Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

When set to True ($True) allows audio and video streams to be separated from other network traffic; in turn, this allows client devices to do encoding and decoding of audio and video locally.
Media redirection typically results in lower bandwidth usage, higher server scalability, and a more-optimal user experience compared to similar techniques such as device remoting or codec compression.



Below Content Applies To: Skype for Business Online

{{Fill EnableMediaRedirection Description}}



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HelpEnvironment
Below Content Applies To: Lync Server 2013

When set to "Office 365", the Office 365 client help documentation for Lync 2013 Preview will be shown to users rather than the on-premises help shown by default.
You can either set HelpEnvironment to "Office 365" or to a null value ($Null).
If set to a null value (the default value) then the on-premises help will be shown to users.



Below Content Applies To: Skype for Business Online

{{Fill HelpEnvironment Description}}



Below Content Applies To: Skype for Business Server 2015

When set to Office 365, the Skype for Business Online client help documentation for Skype for Business will be shown to users rather than the on-premises help shown by default.
You can either set HelpEnvironment to Office 365 or to a null value ($Null).
If set to a null value (the default value) then the on-premises help will be shown to users.



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TracingLevel
Below Content Applies To: Lync Server 2013

Enables Administrators to manage event tracing and logging in Lync 2013 Preview.
Allowed values are:

* Off - Tracing is disabled and the user cannot change this setting.
* Light - Minimal tracing is performed, and the user cannot change this setting.
* Full - Verbose tracing is performed, and the user cannot change this setting.

By default TracingLevel is set to Light.



Below Content Applies To: Skype for Business Online

{{Fill TracingLevel Description}}



Below Content Applies To: Skype for Business Server 2015

Enables Administrators to manage event tracing and logging in Skype for Business.
Allowed values are:

Off - Tracing is disabled and the user cannot change this setting.

Light - Minimal tracing is performed, and the user cannot change this setting.

Full - Verbose tracing is performed, and the user cannot change this setting.

By default TracingLevel is set to Light.



```yaml
Type: TracingLevel
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BypassDualWrite
{{Fill BypassDualWrite Description}}

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableClientAutoPopulateWithTeam
{{Fill EnableClientAutoPopulateWithTeam Description}}

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableExchangeContactsFolder
{{Fill EnableExchangeContactsFolder Description}}

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableHighPerformanceConferencingAppSharing
Below Content Applies To: Skype for Business Online

{{Fill EnableHighPerformanceConferencingAppSharing Description}}



Below Content Applies To: Skype for Business Server 2015

When set to True, enables better performance in applications (such as CAD/CAM applications) that have a high screen refresh rate.
However, this improved performance will reduce the system resources and network bandwidth available to other applications.



```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableHighPerformanceP2PAppSharing
Below Content Applies To: Skype for Business Online

{{Fill EnableHighPerformanceP2PAppSharing Description}}



Below Content Applies To: Skype for Business Server 2015

When set to True, allows a peer-to-peer application sharing session to exceed the maximum frame rate of 2.5 frames per second.
The default value is False.



```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableMeetingEngagement
{{Fill EnableMeetingEngagement Description}}

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableOnlineFeedback
{{Fill EnableOnlineFeedback Description}}

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableOnlineFeedbackScreenshots
{{Fill EnableOnlineFeedbackScreenshots Description}}

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableServerConversationHistory
Below Content Applies To: Skype for Business Online

{{Fill EnableServerConversationHistory Description}}



Below Content Applies To: Skype for Business Server 2015

When set to True ($True), allows conversation histories, missed call notifications, and missed IM notifications to be stored on the server instead of in client mailboxes.
This makes it easier for users to retrieve that information from a mobile device.

The default value is False ($False).



```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableSkypeUI
Below Content Applies To: Skype for Business Online

{{Fill EnableSkypeUI Description}}



Below Content Applies To: Skype for Business Server 2015

When set to True ($True), this parameter allows administrators to enable the Skype for Business user interface instead of the Lync interface for the Skype for Business client.



```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableViewBasedSubscriptionMode
{{Fill EnableViewBasedSubscriptionMode Description}}

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IMLatencyErrorThreshold
Below Content Applies To: Skype for Business Online

{{Fill IMLatencyErrorThreshold Description}}



Below Content Applies To: Skype for Business Server 2015

If IM latency is greater than the threshold value (in milliseconds), the client will submit a CER.



```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IMLatencySpinnerDelay
Below Content Applies To: Skype for Business Online

{{Fill IMLatencySpinnerDelay Description}}



Below Content Applies To: Skype for Business Server 2015

Amount of time, in milliseconds, to wait before showing the spinner in the client when IM message delivery is delayed.



```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PublicationBatchDelay
{{Fill PublicationBatchDelay Description}}

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RateMyCallAllowCustomUserFeedback
Below Content Applies To: Skype for Business Online

{{Fill RateMyCallAllowCustomUserFeedback Description}}



Below Content Applies To: Skype for Business Server 2015

PARAMVALUE: $true | $false



```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RateMyCallDisplayPercentage
Below Content Applies To: Skype for Business Online

{{Fill RateMyCallDisplayPercentage Description}}



Below Content Applies To: Skype for Business Server 2015

PARAMVALUE: UInt16



```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequireContentPin
{{Fill RequireContentPin Description}}

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SupportModernFilePicker
{{Fill SupportModernFilePicker Description}}

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TelemetryTier
{{Fill TelemetryTier Description}}

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
Below Content Applies To: Skype for Business Online

{{Fill Tenant Description}}



Below Content Applies To: Skype for Business Server 2015

Globally unique identifier (GUID) of the Skype for Business Online tenant account for whom the new client policy is being created.
For example:

-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"

You can return the tenant ID for each of your Skype for Business Online tenants by running this command:

Get-CsTenant | Select-Object DisplayName, TenantID



```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AsJob
{{Fill AsJob Description}}

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.
New-CsClientPolicy does not accept pipelined input.

### None

###  
None.
The New-CsClientPolicy cmdlet does not accept pipelined input.

## OUTPUTS

###  
New-CsClientPolicy creates new instances of the Microsoft.Rtc.Management.WritableConfig.Policy.Client.ClientPolicy object.

### System.Object

###  
The New-CsClientPolicy cmdlet creates new instances of the Microsoft.Rtc.Management.WritableConfig.Policy.Client.ClientPolicy object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/47a92c7d-fe94-4843-b9d5-92b955306666(OCS.14).aspx)

[Get-CsClientPolicy]()

[Grant-CsClientPolicy]()

[New-CsClientPolicyEntry]()

[Remove-CsClientPolicy]()

[Set-CsClientPolicy]()

[Online Version](http://technet.microsoft.com/EN-US/library/47a92c7d-fe94-4843-b9d5-92b955306666(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/47a92c7d-fe94-4843-b9d5-92b955306666(OCS.16).aspx)

