---
external help file: Microsoft.Open.Teams.CommonLibrary.dll-Help.xml
Module Name: MicrosoftTeams
online version: https://docs.microsoft.com/powershell/module/teams/set-csphonenumberassignment
applicable: Microsoft Teams
author: jenstrier
ms.author: jenstr
ms.reviewer: 
manager:
schema: 2.0.0
---

# Set-CsPhoneNumberAssignment

## SYNOPSIS
This cmdlet will assign a phone number to a user or a resource account (online application instance).

> [!NOTE]
> **Preview** The use of this cmdlet is in Public Preview.
  
## SYNTAX

### Assignment (Default)
```powershell
Set-CsPhoneNumberAssignment -Identity <String> -PhoneNumber <String> -PhoneNumberType <String> -LocationId <String> [<CommonParameters>]
```

### Attribute
```powershell
Set-CsPhoneNumberAssignment -Identity <String> -EnterpriseVoiceEnabled <Boolean> [<CommonParameters>]
```

## DESCRIPTION
This cmdlet assigns a phone number to a user or resource account. When you assign a phone number the EnterpriseVoiceEnabled flag is automatically set to True.

To remove a phone number from a user or resource account, use the [Remove-CsPhoneNumberAssignment](Remove-CsPhoneNumberAssignment.md) cmdlet.


## EXAMPLES

### Example 1
```powershell
Set-CsPhoneNumberAssignment -Identity user1@contoso.com -PhoneNumber +12065551234 -PhoneNumberType CallingPlan
```
This example assigns the Microsoft Calling Plan phone number +1 (206) 555-1234 to the user user1@contoso.com.

### Example 2
```powershell
$loc=Get-CsOnlineLisLocation -City Vancouver
Set-CsPhoneNumberAssignment -Identity user2@contoso.com -PhoneNumber +12065551224 -PhoneNumberType CallingPlan -LocationId $loc.LocationId
```
This example finds the emergency location defined for the corporate location Vancouver and assigns the Microsoft Calling Plan phone number +1 (206) 555-1224 and location 
to the user user2@contoso.com.

### Example 3
```powershell
Set-CsPhoneNumberAssignment -Identity user3@contoso.com -EnterpriseVoiceEnabled $true
```
This example sets the EnterpriseVoiceEnabled flag on the user user3@contoso.com.

### Example 4
```powershell
Set-CsPhoneNumberAssignment -Identity user2@contoso.com -LocationId null -PhoneNumber +12065551224 -PhoneNumberType CallingPlan
```
This example removes the emergency location from the phone number for user user2@contoso.com.

### Example 5
```powershell
Set-CsPhoneNumberAssignment -Identity cq1@contoso.com -PhoneNumber +14255551225 -PhoneNumberType DirectRouting
```
This example assigns the Direct Routing phone number +1 (425) 555-1225 to the resource account cq1@contoso.com.

### Example 6
```powershell
Set-CsPhoneNumberAssignment -Identity user4@contoso.com -PhoneNumber "+1425551000;ext=100" -PhoneNumberType DirectRouting
```
This example assigns the Direct Routing phone number +1 (425) 555-1000;ext=100 to the user user4@contoso.com.


## PARAMETERS

### -EnterpriseVoiceEnabled
Flag indicating if the user or resource account should be EnterpriseVoiceEnabled.

This parameter is mutual exclusive with PhoneNumber.

```yaml
Type: System.Boolean
Parameter Sets: (Attribute)
Aliases: 
Applicable: Microsoft Teams

Required: False
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

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

### -LocationId
The LocationId of the location to assign to the specific user. You can get it using Get-CsOnlineLisLocation. If you want to remove the location, use
the string value null.

```yaml
Type: System.String
Parameter Sets: (Assignment)
Aliases:

Required: False
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PhoneNumber
The phone number to assign to the user or resource account. Supports E.164 format like +12065551234 and non-E.164 format like 12065551234. The phone number can not have
"tel:" prefixed. We support Direct Routing numbers with extensions using the formats +1206555000;ext=1234 or 1206555000;ext=1234.


Setting a phone number will automatically set EnterpriseVoiceEnabled to True.

```yaml
Type: System.String
Parameter Sets: (Assignment)
Aliases:

Required: False
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PhoneNumberType
The type of phone number to assign to the user or resource account. The supported values are DirectRouting, CallingPlan, and OperatorConnect. When you acquire a phone number

you will typically know which type it is.

```yaml
Type: System.String
Parameter Sets: (Assignment)
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

If a user or resource account has a phone number set in Active Directory on-premises and synched into Microsoft 365, you can't use Set-CsPhoneNumberAssignment to set the phone
number. You will have to clear the phone number from the on-premises Active Directory and let that change sync into Microsoft 365 first.

The previous command for assigning phone numbers to users Set-CsUser had the parameter HostedVoiceMail. Setting HostedVoiceMail for Microsoft Teams users is no longer
necessary and that is why the parameter is not available on Set-CsPhoneNumberAssignment.


## RELATED LINKS
[Remove-CsPhoneNumberAssignment](Remove-CsPhoneNumberAssignment.md)
