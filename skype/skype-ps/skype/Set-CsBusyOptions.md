---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Skype for Business Server 2015, Skype for Business Server 2019
title: Set-CsBusyOptions
schema: 2.0.0
---

# Set-CsBusyOptions

## SYNOPSIS
Sets up the processing of incoming calls for users is already in communication whether for a call, conference or placed call waiting. This cmdlet was introduced in Skype for Business Server 2015 June 2016 Cumulative Update.

## SYNTAX

```
Set-CsBusyOptions [-Identity] <UserIdParameter> -ActionType <ActionType> [-Confirm] [-PassThru] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet sets the configuration for processing of incoming calls defined for a specific user. If Busy Options is enabled for the organization, all users in your organization, both Enterprise Voice and non-Enterprise Voice users, can use the following features:

* Busy on Busy - In which new incoming calls will be rejected with a busy signal if the user is busy.

* Voicemail on Busy - In which new incoming calls will be forwarded to voice mail if the user is busy.

The Busy Options feature provides failover capability. If a problem occurs and users fail over to another Front End Server or to another pool in Skype for Business Server, their Busy Options settings will be preserved.

Regardless of how their busy options are configured, users in a call or conference, or those with a call on hold, are not prevented from initiating new calls or conferences.

After configuration, the Busy Options setting is in effect for all the user's Skype for Business call devices and clients. Based on the user's Busy Options settings, the call that is rejected or sent to voice mail would not ring on any of the user's call devices--including Macintosh, Windows Desktop, mobile clients, or IP phones--on which the user is signed in.

Users will see missed-call notifications on their Skype for Business clients and devices, and they will be notified by email as well. Callers whose call was rejected due to Busy on Busy will see a notification in their Skype for Business client stating that the user they attempted to reach is busy on another call.

For more information about how to enable Busy Options in your organization, see (https://docs.microsoft.com/en-us/skypeforbusiness/deploy/deploy-enterprise-voice/install-and-configure-busy-options).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-CsBusyOptions -Identity "Ken Myer" -ActionType BusyOnBusy
```

This cmdlet configures busy options for the user "Ken Myer". In this configuration, any call to "Ken Myer" will return a busy signal when he is already in a call.

### -------------------------- Example 2 --------------------------
```
Set-CsBusyOptions -Identity "Chrystal Velasquez" -ActionType VoicemailOnBusy
```

This cmdlet configures busy options for the user "Chrystal Velasquez". In this configuration, new incoming calls to "Chrystal Velasquez" will be forwarded to voice mail when she is already in a call.

## PARAMETERS

### -ActionType
There are two Action Type options:

* BusyOnBusy - In which new incoming calls will be rejected with a busy signal if the user is busy.

* VoicemailOnBusy - In which new incoming calls will be forwarded to voice mail if the user is busy.

```yaml
Type: ActionType
Parameter Sets: (All)
Aliases: 
Accepted values: BusyOnBusy, VoicemailOnBusy
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Indicates the Identity of the user account to be modified. User Identities can be specified using one of four formats: 1) the user's SIP address; 2) the user's user principal name (UPN); 3) the user's domain name and logon name, in the form domain\logon (for example, litwareinc\kenmyer) and 4) the user's Active Directory display name (for example, Ken Myer). User Identities can also be referenced by using the user's Active Directory distinguished name.

You can use the asterisk (*) wildcard character when using the display name as the user Identity. For example, the Identity "*Smith" returns all the users who have a display name that ends with the string value "Smith".

```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -PassThru
Returns an object representing the item with which you are working. By default, this cmdlet does not generate any output.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

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
Microsoft.Rtc.Management.Bob.Cmdlets.ActionType object.
Microsoft.Rtc.Management.AD.UserIdParameter object.

## OUTPUTS

### 
Microsoft.Rtc.Management.Bob.Cmdlets.ActionType object.
Microsoft.Rtc.Management.AD.UserIdParameter object.

## NOTES

## RELATED LINKS
* [Get-CsBusyOptions](https://docs.microsoft.com/en-us/powershell/module/skype/get-csbusyoptions?view=skype-ps)
* [Remove-CsBusyOptions](https://docs.microsoft.com/en-us/powershell/module/skype/remove-csbusyoptions?view=skype-ps)
