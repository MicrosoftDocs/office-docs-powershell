---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsVoicemailReroutingConfiguration

## SYNOPSIS
Below Content Applies To: Lync Server 2010

Removes settings that provide public switched telephone network (PSTN) phone numbers to access Exchange Unified Messaging (UM) Subscriber Access and Auto Attendant features.

Below Content Applies To: Lync Server 2013

Removes settings that provide public switched telephone network (PSTN) phone numbers to access Exchange UM Subscriber Access and Auto Attendant features.
This cmdlet was introduced in Lync Server 2010.

Below Content Applies To: Skype for Business Server 2015

Removes settings that provide public switched telephone network (PSTN) phone numbers to access Exchange Subscriber Access and Auto Attendant features.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Remove-CsVoicemailReroutingConfiguration [-Identity] <XdsIdentity> [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2010

This cmdlet allows you to remove settings that determine where Auto Attendant and Subscriber Access calls are rerouted to over PSTN when IP connectivity is lost.

Auto Attendant and Subscriber Access are features of Exchange UM.
The Auto Attendant feature provides voice recognition and touch-tone control (dual-tone multifrequency, or DTMF) for outside callers to navigate a company's phone system to reach the desired department or employee or, in Message Taking Mode, to accept messages for users.
(Voice rerouting for Message Taking Mode is recommended.) Subscriber Access allows internal users to access their Microsoft Outlook mailbox from a phone.
The numbers provided by these settings allow callers to leave voice mail messages for Enterprise Voice users (the AutoAttendantNumber setting) and for those users to retrieve voice mail even if the IP connectivity from the Lync Server 2010 deployment at a remote site to Exchange UM in the data center is unavailable (the SubscriberAccessNumber setting).

Note that if you call this cmdlet to remove the Global settings, those settings will simply be reset to their defaults.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsVoicemailReroutingConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsVoicemailReroutingConfiguration"}

Below Content Applies To: Lync Server 2013

This cmdlet allows you to remove settings that determine where Auto Attendant and Subscriber Access calls are rerouted to over PSTN when IP connectivity is lost.

Auto Attendant and Subscriber Access are features of Exchange UM.
The Auto Attendant feature provides voice recognition and touch-tone control (dual-tone multifrequency, or DTMF) for outside callers to navigate a company's phone system to reach the desired department or employee or, in Message Taking Mode, to accept messages for users.
(Voice rerouting for Message Taking Mode is recommended.) Subscriber Access allows internal users to access their Microsoft Outlook mailbox from a phone.
The numbers provided by these settings allow callers to leave voice mail messages for Enterprise Voice users (the AutoAttendantNumber setting) and for those users to retrieve voice mail even if the IP connectivity from the Lync Server deployment at a remote site to Exchange UM in the data center is unavailable (the SubscriberAccessNumber setting).

Note that if you call this cmdlet to remove the Global settings, those settings will simply be reset to their defaults.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsVoicemailReroutingConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsVoicemailReroutingConfiguration"}

Below Content Applies To: Skype for Business Server 2015

This cmdlet allows you to remove settings that determine where Auto Attendant and Subscriber Access calls are rerouted to over PSTN when IP connectivity is lost.

Auto Attendant and Subscriber Access are features of Exchange.
The Auto Attendant feature provides voice recognition and touch-tone control (dual-tone multifrequency, or DTMF) for outside callers to navigate a company's phone system to reach the desired department or employee or, in Message Taking Mode, to accept messages for users.
(Voice rerouting for Message Taking Mode is recommended.) Subscriber Access allows internal users to access their Microsoft Outlook mailbox from a phone.
The numbers provided by these settings allow callers to leave voice mail messages for Enterprise Voice users (the AutoAttendantNumber setting) and for those users to retrieve voice mail even if the IP connectivity from the Skype for Business Server 2015 deployment at a remote site to Exchange in the data center is unavailable (the SubscriberAccessNumber setting).

Note that if you call this cmdlet to remove the Global settings, those settings will simply be reset to their defaults.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Remove-CsVoicemailReroutingConfiguration -Identity site:Redmond1
```

This example removes the voice mail rerouting configuration settings for the site Redmond1.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

This example removes the voice mail rerouting configuration settings for the site Redmond1.

Remove-CsVoicemailReroutingConfiguration -Identity site:Redmond1

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

This example removes the voice mail rerouting configuration settings for the site Redmond1.

Remove-CsVoicemailReroutingConfiguration -Identity site:Redmond1

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
Get-CsVoicemailReroutingConfiguration | Remove-CsVoicemailReroutingConfiguration
```

This example removes all the voice mail rerouting settings for this deployment of Lync Server.
The command first retrieves all the voice mail rerouting configuration settings by calling Get-CsVoicemailReroutingConfiguration.
The settings retrieved by this call are then passed to Remove-CsVoicemailReroutingConfiguration to delete each one.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

This example removes all the voice mail rerouting settings for this deployment of Lync Server.
The command first retrieves all the voice mail rerouting configuration settings by calling Get-CsVoicemailReroutingConfiguration.
The settings retrieved by this call are then passed to Remove-CsVoicemailReroutingConfiguration to delete each one.

Get-CsVoicemailReroutingConfiguration | Remove-CsVoicemailReroutingConfiguration

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

This example removes all the voice mail rerouting settings for this deployment of Skype for Business Server 2015.
The command first retrieves all the voice mail rerouting configuration settings by calling the Get-CsVoicemailReroutingConfiguration cmdlet.
The settings retrieved by this call are then passed to the Remove-CsVoicemailReroutingConfiguration cmdlet to delete each one.

Get-CsVoicemailReroutingConfiguration | Remove-CsVoicemailReroutingConfiguration

## PARAMETERS

### -Identity
The unique identifier of the configuration you want to remove.
For this cmdlet the Identity will be either Global or Site:\<site name\>, where \<site name\> is the name of the site to which the settings are applied.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Force
Suppresses any confirmation prompts that would otherwise be displayed before making changes.

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

### -WhatIf
Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
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
Microsoft.Rtc.Management.WritableConfig.Settings.ExumRouting.VoicemailReroutingConfiguration object.
Accepts pipelined input of voice mail rerouting configuration objects.

## OUTPUTS

###  
Removes an object of type Microsoft.Rtc.Management.WritableConfig.Settings.ExumRouting.VoicemailReroutingConfiguration.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/758cea84-5979-417c-a0cd-c76748e0da79(OCS.14).aspx)

[New-CsVoicemailReroutingConfiguration]()

[Set-CsVoicemailReroutingConfiguration]()

[Get-CsVoicemailReroutingConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/758cea84-5979-417c-a0cd-c76748e0da79(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/758cea84-5979-417c-a0cd-c76748e0da79(OCS.16).aspx)

