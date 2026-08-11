---
applicable: Skype for Business Server 2015, Skype for Business Server 2019
author: hirenshah1
external help file: Microsoft.Rtc.Management.dll-help.xml
Locale: en-US
manager: rogupta
Module Name: SkypeForBusiness
ms.author: hirshah
online version: https://learn.microsoft.com/powershell/module/skypeforbusiness/get-csbusyoptions
schema: 2.0.0
title: Get-CsBusyOptions
---

# Get-CsBusyOptions

## SYNOPSIS
Returns the settings for processing of incoming calls for users who are already engaged in another communication stream. This cmdlet was introduced in Skype for Business Server 2015 June 2016 Cumulative Update.

## SYNTAX

```
Get-CsBusyOptions [-Identity] <UserIdParameter> [-PassThru] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet retrieves configuration information about Busy Options for a specific user. It returns one of two Action Type options:

* BusyOnBusy - In which new incoming calls will be rejected with a busy signal if the user is busy.

* VoicemailOnBusy - In which new incoming calls will be forwarded to voice mail if the user is busy.


## EXAMPLES

### Example 1
```
Get-CsBusyOptions -Identity sip:KenMyer@Contoso.com
```

This example returns the Busy Options setting for "KenMyer@Contoso.com".


## PARAMETERS

### -Identity

> Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Indicates the Identity of the user account to be modified. User Identities can be specified using one of four formats: 1) the user's SIP address; 2) the user's user principal name (UPN); 3) the user's domain name and logon name, in the form domain\logon (for example, litwareinc\kenmyer) and 4) the user's Active Directory display name (for example, Ken Myer). User Identities can also be referenced by using the user's Active Directory distinguished name.

You can use the asterisk (*) wildcard character when using the display name as the user Identity. For example, the Identity "*Smith" returns all the users who have a display name that ends with the string value "Smith".

```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -PassThru

> Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Returns an object representing the item with which you are working. By default, this cmdlet does not generate any output.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).


## INPUTS

### Microsoft.Rtc.Management.AD.UserIdParameter

## OUTPUTS

### Microsoft.Rtc.Management.Bob.Cmdlets.ActionType

### Microsoft.Rtc.Management.AD.UserIdParameter

## NOTES

## RELATED LINKS

[Remove-CsBusyOptions](https://learn.microsoft.com/powershell/module/skypeforbusiness/remove-csbusyoptions?view=skype-ps)

[Set-CsBusyOptions](https://learn.microsoft.com/powershell/module/skypeforbusiness/set-csbusyoptions?view=skype-ps)
