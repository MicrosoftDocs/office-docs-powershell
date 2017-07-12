---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsVoicemailReroutingConfiguration

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Retrieves settings that provide public switched telephone network (PSTN) phone numbers to access Exchange Unified Messaging (UM) Subscriber Access and Auto Attendant features.

**Below Content Applies To:** Lync Server 2013

Retrieves settings that provide public switched telephone network (PSTN) phone numbers to access Exchange UM Subscriber Access and Auto Attendant features.
This cmdlet was introduced in Lync Server 2010.

**Below Content Applies To:** Skype for Business Server 2015

Retrieves settings that provide public switched telephone network (PSTN) phone numbers to access Exchange Subscriber Access and Auto Attendant features.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
Get-CsVoicemailReroutingConfiguration [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsVoicemailReroutingConfiguration [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

This cmdlet retrieves settings that determine where Auto Attendant and Subscriber Access calls are rerouted to when IP connectivity from Microsoft Lync Server 2010 in the branch site to the Exchange UM Server located in the data center is not available.

Auto Attendant and Subscriber Access are features of Exchange UM.
The Auto Attendant feature provides voice recognition and touch-tone control (dual-tone multifrequency, or DTMF) for outside callers to navigate a company's phone system to reach the desired department or employee or, in Message Taking Mode, to accept messages for users.
(Voice rerouting for Message Taking Mode is recommended.) Subscriber Access allows internal users to access their Microsoft Outlook mailbox from a phone.
The numbers provided by these settings allow callers to leave voice mail messages for Enterprise Voice users (the AutoAttendantNumber setting) and for those users to retrieve voice mail even if the IP connectivity from the Lync Server 2010 deployment at a remote site to Exchange UM in the data center is unavailable (the SubscriberAccessNumber setting).

Calling this cmdlet with no parameters will return all voice mail rerouting configurations.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsVoicemailReroutingConfiguration cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the  Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsVoicemailReroutingConfiguration"}

**Below Content Applies To:** Lync Server 2013

This cmdlet retrieves settings that determine where Auto Attendant and Subscriber Access calls are rerouted to when IP connectivity from Lync Server in the branch site to the Exchange UM Server located in the data center is not available.

Auto Attendant and Subscriber Access are features of Exchange UM.
The Auto Attendant feature provides voice recognition and touch-tone control (dual-tone multifrequency, or DTMF) so that outside callers can navigate a company's phone system to reach the department or employee they want or, in Message Taking Mode, to accept messages for users.
(Voice rerouting for Message Taking Mode is recommended.) Subscriber Access allows internal users to access their Microsoft Outlook mailbox from a phone.
The numbers provided by these settings allow callers to leave voice mail messages for Enterprise Voice users (the AutoAttendantNumber setting) and for those users to retrieve voice mail even if the IP connectivity from the Lync Server deployment at a remote site to Exchange UM in the data center is unavailable (the SubscriberAccessNumber setting).

Calling this cmdlet with no parameters will return all voice mail rerouting configurations.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsVoicemailReroutingConfiguration cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsVoicemailReroutingConfiguration"}

**Below Content Applies To:** Skype for Business Server 2015

This cmdlet retrieves settings that determine where Auto Attendant and Subscriber Access calls are rerouted to when IP connectivity from Skype for Business Server 2015 in the branch site to the Exchange Server located in the data center is not available.

Auto Attendant and Subscriber Access are features of Exchange.
The Auto Attendant feature provides voice recognition and touch-tone control (dual-tone multifrequency, or DTMF) so that outside callers can navigate a company's phone system to reach the department or employee they want or, in Message Taking Mode, to accept messages for users.
(Voice rerouting for Message Taking Mode is recommended.) Subscriber Access allows internal users to access their Microsoft Outlook mailbox from a phone.
The numbers provided by these settings allow callers to leave voice mail messages for Enterprise Voice users (the AutoAttendantNumber setting) and for those users to retrieve voice mail even if the IP connectivity from the Skype for Business Server 2015 deployment at a remote site to Exchange in the data center is unavailable (the SubscriberAccessNumber setting).

Calling this cmdlet with no parameters will return all voice mail rerouting configurations.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Get-CsVoicemailReroutingConfiguration
```

This example retrieves all of the voice mail rerouting configuration settings defined in this deployment of Lync Server 2010.
For example, if there are three branch offices where a Survivable Branch Appliance is deployed, this command will return three voice mail rerouting configuration sets.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

This example retrieves all of the voice mail rerouting configuration settings defined in this deployment of Lync Server.
For example, if there are three branch offices where a Survivable Branch Appliance is deployed, this command will return three voice mail rerouting configuration sets.

Get-CsVoicemailReroutingConfiguration

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

This example retrieves all of the voice mail rerouting configuration settings defined in this deployment of Skype for Business Server 2015.
For example, if there are three branch offices where a Survivable Branch Appliance is deployed, this command will return three voice mail rerouting configuration sets.

Get-CsVoicemailReroutingConfiguration

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
Get-CsVoicemailReroutingConfiguration -Identity site:BranchOffice_Portland
```

This example retrieves the voice mail rerouting configuration settings for the site BranchOffice_Portland.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

This example retrieves the voice mail rerouting configuration settings for the site BranchOffice_Portland.

Get-CsVoicemailReroutingConfiguration -Identity site:BranchOffice_Portland

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

This example retrieves the voice mail rerouting configuration settings for the site BranchOffice_Portland.

Get-CsVoicemailReroutingConfiguration -Identity site:BranchOffice_Portland

### -------------------------- Example 3 -------------------------- (Lync Server 2010)
```
Get-CsVoicemailReroutingConfiguration -Filter *:BranchOffice*
```

This example retrieves all the voice mail rerouting settings for all sites with site names beginning with the string BranchOffice (for example, BranchOffice_Portland, BranchOffice_Sacramento).

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

This example retrieves all the voice mail rerouting settings for all sites with site names beginning with the string BranchOffice (for example, BranchOffice_Portland, BranchOffice_Sacramento).

Get-CsVoicemailReroutingConfiguration -Filter *:BranchOffice*

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

This example retrieves all the voice mail rerouting settings for all sites with site names beginning with the string BranchOffice (for example, BranchOffice_Portland, BranchOffice_Sacramento).

Get-CsVoicemailReroutingConfiguration -Filter *:BranchOffice*

### -------------------------- Example 4 -------------------------- (Lync Server 2010)
```
Get-CsVoicemailReroutingConfiguration | Where-Object {$_.Enabled -eq $False}
```

This example retrieves all the voice mail rerouting configurations that are not enabled.
The first part of this command is a call to Get-CsVoicemailReroutingConfiguration, which retrieves a collection of all the voice mail rerouting configurations.
That collection is then piped to the Where-Object cmdlet.
Where-Object narrows that collection down to include only the configurations that have an Enabled property equal to (-eq) False.

### -------------------------- EXAMPLE 4 -------------------------- (Lync Server 2013)
```

```

This example retrieves all the voice mail rerouting configurations that are not enabled.
The first part of this command is a call to Get-CsVoicemailReroutingConfiguration, which retrieves a collection of all the voice mail rerouting configurations.
That collection is then piped to the Where-Object cmdlet.
Where-Object narrows that collection down to include only the configurations that have an Enabled property equal to (-eq) False.

Get-CsVoicemailReroutingConfiguration | Where-Object {$_.Enabled -eq $False}

### -------------------------- EXAMPLE 4 -------------------------- (Skype for Business Server 2015)
```

```

This example retrieves all the voice mail rerouting configurations that are not enabled.
The first part of this command is a call to the Get-CsVoicemailReroutingConfiguration cmdlet, which retrieves a collection of all the voice mail rerouting configurations.
That collection is then piped to the Where-Object cmdlet.
The Where-Object cmdlet narrows that collection down to include only the configurations that have an Enabled property equal to (-eq) False.

Get-CsVoicemailReroutingConfiguration | Where-Object {$_.Enabled -eq $False}

## PARAMETERS

### -Identity
The unique identifier of the configuration you want to retrieve.
For this cmdlet the Identity will be either Global or Site:\<site name\>, where \<site name\> is the name of the site to which the settings are applied.

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
The Filter parameter allows you to retrieve configuration settings for a particular set of sites based on wildcard matching.

```yaml
Type: String
Parameter Sets: Filter
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Retrieves the voice mail rerouting configuration from the local replica of the Central Management store, rather than the Central Management store itself.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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

## OUTPUTS

###  
Retrieves one or more objects of type Microsoft.Rtc.Management.WritableConfig.Settings.ExumRouting.VoicemailReroutingConfiguration.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/25e401eb-6a84-468f-b0eb-5b794f20b5bc(OCS.14).aspx)

[New-CsVoicemailReroutingConfiguration]()

[Remove-CsVoicemailReroutingConfiguration]()

[Set-CsVoicemailReroutingConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/25e401eb-6a84-468f-b0eb-5b794f20b5bc(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/25e401eb-6a84-468f-b0eb-5b794f20b5bc(OCS.16).aspx)

