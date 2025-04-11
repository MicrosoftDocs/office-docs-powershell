---
external help file: Microsoft.Open.Teams.CommonLibrary.dll-Help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/remove-csphonenumberassignment
applicable: Microsoft Teams
title: Remove-CsPhoneNumberAssignment
schema: 2.0.0
author: serdarsoysal
ms.author: serdars
ms.reviewer:
manager:
---

# Remove-CsPhoneNumberAssignment

## SYNOPSIS
This cmdlet will remove/unassign a phone number from a user or a resource account (online application instance).

## SYNTAX

### RemoveSome (Default)
```powershell
Remove-CsPhoneNumberAssignment -Identity <String> -PhoneNumber <String> -PhoneNumberType <String> [<CommonParameters>]
```

### RemoveAll
```powershell
Remove-CsPhoneNumberAssignment -Identity <String> -RemoveAll [<CommonParameters>]
```

## DESCRIPTION
This cmdlet removes/unassigns a phone number from a user or resource account. The phone number continues to be available in the tenant.

Unassigning a phone number from a user or resource account will automatically set EnterpriseVoiceEnabled to False.

If the cmdlet executes successfully, no result object will be returned. If the cmdlet fails for any reason, a result object will be returned that contains a
Code string parameter and a Message string parameter with additional details of the failure.

**Note**: In Teams PowerShell Module 4.2.1-preview and later we are changing how the cmdlet reports errors. Instead of using a result object, we will be generating an
exception in case of an error and we will be appending the exception to the $Error automatic variable. The cmdlet will also
now support the -ErrorAction parameter to control the execution after an error has occurred.

## EXAMPLES

### Example 1
```powershell
Remove-CsPhoneNumberAssignment -Identity user1@contoso.com -PhoneNumber +12065551234 -PhoneNumberType CallingPlan
```
This example removes/unassigns the Microsoft Calling Plan phone number +1 (206) 555-1234 from the user user1@contoso.com.

### Example 2
```powershell
Remove-CsPhoneNumberAssignment -Identity user2@contoso.com -RemoveAll
```
This example removes/unassigns the phone number from user2@contoso.com.

## PARAMETERS

### -Identity
The Identity of the specific user or resource account. Can be specified using the value in the ObjectId, the SipProxyAddress, or the UserPrincipalName attribute of the user or
resource account.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: True
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PhoneNumber
The phone number to unassign from the user or resource account. Supports E.164 format and non-E.164 format. Needs to be without the prefixed "tel:".

```yaml
Type: System.String
Parameter Sets: (RemoveSome)
Aliases:

Required: False
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PhoneNumberType
The type of phone number to unassign from the user or resource account. The supported values are DirectRouting, CallingPlan and OperatorConnect.

```yaml
Type: System.String
Parameter Sets: (RemoveSome)
Aliases:

Required: False
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveAll
Unassigns the phone number from the user or resource account.

```yaml
Type: Switch
Parameter Sets: (RemoveAll)
Aliases:

Required: False
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES
The cmdlet is available in Teams PowerShell module 3.0.0 or later.

The cmdlet is only available in commercial and GCC cloud instances.

## RELATED LINKS
[Set-CsPhoneNumberAssignment](https://learn.microsoft.com/powershell/module/teams/set-csphonenumberassignment)

[Get-CsPhoneNumberAssignment](https://learn.microsoft.com/powershell/module/teams/get-csphonenumberassignment)
