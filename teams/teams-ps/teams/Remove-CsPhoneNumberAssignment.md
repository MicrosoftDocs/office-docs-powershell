---
external help file: Microsoft.Open.Teams.CommonLibrary.dll-Help.xml
Module Name: MicrosoftTeams
online version: https://docs.microsoft.com/powershell/module/teams/remove-csphonenumberassignment
applicable: Microsoft Teams
author: jenstrier
ms.author: jenstr
ms.reviewer: 
manager:
schema: 2.0.0
---

# Remove-CsPhoneNumberAssignment

## SYNOPSIS
This cmdlet will remove/unassign a phone number from a user or a resource account (online application instance).

> [!NOTE]
> **Preview** The use of this cmdlet is in Public Preview.
  
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
The Id of the specific user or resource account. Can be specified using the ObjectId, the SIP address or the e-mail address.

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
The phone number to unnassign from the user or resource account. Supports E.164 format and non-E.164 format.

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
The cmdlet is available in Teams PS module 2.6.1-preview or later.

## RELATED LINKS
[Set-CsPhoneNumberAssignment](Set-CsPhoneNumberAssignment.md)
