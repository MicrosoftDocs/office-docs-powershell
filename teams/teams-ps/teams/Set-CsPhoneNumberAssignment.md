---
external help file: Microsoft.Open.Teams.CommonLibrary.dll-Help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/set-csphonenumberassignment
applicable: Microsoft Teams
title: Set-CsPhoneNumberAssignment
schema: 2.0.0
author: serdarsoysal
ms.author: serdars
ms.reviewer:
manager:
---

# Set-CsPhoneNumberAssignment

## SYNOPSIS
This cmdlet will assign a phone number to a user or a resource account (online application instance).

## SYNTAX

### LocationUpdate (Default)
```powershell
Set-CsPhoneNumberAssignment -PhoneNumber <string> -LocationId <string> [<CommonParameters>]
```

### NetworkSiteUpdate
```powershell
Set-CsPhoneNumberAssignment -PhoneNumber <string> -NetworkSiteId <string> [<CommonParameters>]
```

### Assignment
```powershell
Set-CsPhoneNumberAssignment -Identity <String> -PhoneNumber <String> -PhoneNumberType <String>
 [-LocationId <String>] [-NetworkSiteId <string>] [-AssignmentCategory <string>] [<CommonParameters>]
```

### Attribute
```powershell
Set-CsPhoneNumberAssignment -Identity <String> -EnterpriseVoiceEnabled <Boolean> [<CommonParameters>]
```

### ReverseNumberLookup
```powershell
Set-CsPhoneNumberAssignment -PhoneNumber <string> -ReverseNumberLookup <string> [<CommonParameters>]
```

### Notify
```powershell
Set-CsPhoneNumberAssignment -Identity <string> -PhoneNumber <string> -PhoneNumberType <String> -Notify [<CommonParameters>]
```

## DESCRIPTION
This cmdlet assigns a phone number to a user or resource account. When you assign a phone number the EnterpriseVoiceEnabled flag is automatically set to True.

You can also assign a location to a phone number.

To remove a phone number from a user or resource account, use the [Remove-CsPhoneNumberAssignment](https://learn.microsoft.com/powershell/module/teams/remove-csphonenumberassignment) cmdlet.

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
This example finds the emergency location defined for the corporate location Vancouver and assigns the Microsoft Calling Plan phone number +1 (206) 555-1224 and location to the user user2@contoso.com.

### Example 3
```powershell
Set-CsPhoneNumberAssignment -Identity user3@contoso.com -EnterpriseVoiceEnabled $true
```
This example sets the EnterpriseVoiceEnabled flag on the user user3@contoso.com.

### Example 4
```powershell
Set-CsPhoneNumberAssignment -Identity user3@contoso.com -LocationId 'null' -PhoneNumber +12065551226 -PhoneNumberType OperatorConnect
```
This example removes the emergency location from the phone number for user user3@contoso.com.

### Example 5
```powershell
Set-CsPhoneNumberAssignment -Identity cq1@contoso.com -PhoneNumber +14255551225 -PhoneNumberType DirectRouting
```
This example assigns the Direct Routing phone number +1 (425) 555-1225 to the resource account cq1@contoso.com.

### Example 6
```powershell
Set-CsPhoneNumberAssignment -Identity user4@contoso.com -PhoneNumber "+14255551000;ext=1234" -PhoneNumberType DirectRouting
```
This example assigns the Direct Routing phone number +1 (425) 555-1000;ext=1234 to the user user4@contoso.com.

### Example 7
```powershell
Try { Set-CsPhoneNumberAssignment -Identity user5@contoso.com -PhoneNumber "+14255551000;ext=1234" -PhoneNumberType DirectRouting -ErrorAction Stop } Catch { Write-Host An error occurred }
```
This example shows how to use Try/Catch and ErrorAction to perform error checking on the assignment cmdlet failing.

### Example 8
```powershell
$TempUser = "tempuser@contoso.com"
$OldLoc=Get-CsOnlineLisLocation -City Vancouver
$NewLoc=Get-CsOnlineLisLocation -City Seattle
$Numbers=Get-CsPhoneNumberAssignment -LocationId $OldLoc.LocationId -PstnAssignmentStatus Unassigned -NumberType CallingPlan -CapabilitiesContain UserAssignment
foreach ($No in $Numbers) {
    Set-CsPhoneNumberAssignment -Identity $TempUser -PhoneNumberType CallingPlan -PhoneNumber $No.TelephoneNumber -LocationId $NewLoc.LocationId
    Remove-CsPhoneNumberAssignment -Identity $TempUser -PhoneNumberType CallingPlan -PhoneNumber $No.TelephoneNumber
}
```
This example shows how to change the location for unassigned Calling Plan subscriber phone numbers by looping through all the phone numbers, assigning each phone number temporarily with the new location to a user, and then unassigning the phone number again from the user.

### Example 9
```powershell
$loc=Get-CsOnlineLisLocation -City Toronto
Set-CsPhoneNumberAssignment -PhoneNumber +12065551224 -LocationId $loc.LocationId
```
This example shows how to set the location on a phone number.

### Example 10
```powershell
$OldLocationId = "7fda0c0b-6a3d-48b8-854b-3fbe9dcf6513"
$NewLocationId = "951fac72-955e-4734-ab74-cc4c0f761c0b"
# Get all phone numbers in old location
$pns = Get-CsPhoneNumberAssignment -LocationId $OldLocationId
Write-Host $pns.count numbers found in old location $OldLocationId
# Move all those phone numbers to the new location
foreach ($pn in $pns) {
      Try {
             Set-CsPhoneNumberAssignment -PhoneNumber $pn.TelephoneNumber -LocationId $NewLocationId -ErrorAction Stop
             Write-Host $pn.TelephoneNumber was updated to have location $NewLocationId
      }
      Catch {
             Write-Host Could not update $pn.TelephoneNumber with location $NewLocationId
      }
}
Write-Host (Get-CsPhoneNumberAssignment -LocationId $OldLocationId).Count numbers found in old location $OldLocationId
Write-Host (Get-CsPhoneNumberAssignment -LocationId $NewLocationId).Count numbers found in new location $NewLocationId
```
This Example shows how to update the LocationID from an old location to a new location for a set of phone numbers.

### Example 11
```powershell
Set-CsPhoneNumberAssignment -Identity user3@contoso.com -PhoneNumber +12065551226 -ReverseNumberLookup 'SkipInternalVoip'
```
This example shows how to turn off reverse number lookup (RNL) on a phone number. When RNL is set to 'SkipInternalVoip', an internal call to this phone number will not attempt to pass through internal VoIP via reverse number lookup in Microsoft Teams. Instead the call will be established through external PSTN connectivity directly. This example is only applicable for Direct Routing phone numbers.

### Example 12
```powershell
Set-CsPhoneNumberAssignment -Identity user1@contoso.com -PhoneNumber '+14255551234' -PhoneNumberType CallingPlan -AssignmentCategory Private
```
This example shows how to assign a private phone number (incoming calls only) to a user. 
### Example 13
```powershell
Set-CsPhoneNumberAssignment -Identity user1@contoso.com -PhoneNumber '+14255551234' -PhoneNumberType CallingPlan -LocationId "7fda0c0b-6a3d-48b8-854b-3fbe9dcf6513" -Notify
```
This example shows how to send an email to Teams phone users informing them about the new telephone number assignment. Note: For assignment of India telephone numbers provided by Airtel, Teams Phone users will automatically receive an email outlining the usage guidelines and restrictions. This notification is mandatory and cannot be opted out of. 

## PARAMETERS

### -AssignmentCategory
This parameter indicates the phone number assignment category if it isn't the primary phone number. For example, a Private line can be assigned to a user using '-AssignmentCategory Private'.

```yaml
Type: System.String
Parameter Sets: (Assignment)
Aliases:
Applicable: Microsoft Teams

Required: False
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnterpriseVoiceEnabled
Flag indicating if the user or resource account should be EnterpriseVoiceEnabled.

This parameter is mutual exclusive with PhoneNumber.

```yaml
Type: System.Boolean
Parameter Sets: (Attribute)
Aliases:
Applicable: Microsoft Teams

Required: True
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

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

### -LocationId
The LocationId of the location to assign to the specific user. You can get it using Get-CsOnlineLisLocation. You can set the location on both assigned and unassigned
phone numbers.

Removal of location from a phone number is supported for Direct Routing numbers and Operator Connect numbers that are not managed by the Service Desk.
If you want to remove the location, use the string value null for LocationId.

```yaml
Type: System.String
Parameter Sets: (Assignment, LocationUpdate)
Aliases:

Required: True
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NetworkSiteId
ID of a network site. A network site represents a location where your organization has a physical venue, such as offices, a set of buildings, or a campus.

```yaml
Type: System.String
Parameter Sets: (Assignment)
Aliases:
Applicable: Microsoft Teams

Required: False
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PhoneNumber
The phone number to assign to the user or resource account. Supports E.164 format like +12065551234 and non-E.164 format like 12065551234. The phone number can't have "tel:" prefixed.

We support Direct Routing numbers with extensions using the formats +1206555000;ext=1234 or 1206555000;ext=1234 assigned to a user or resource account.

Setting a phone number will automatically set EnterpriseVoiceEnabled to True.

```yaml
Type: System.String
Parameter Sets: (Assignment, LocationUpdate)
Aliases:

Required: True
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PhoneNumberType
The type of phone number to assign to the user or resource account. The supported values are DirectRouting, CallingPlan, and OperatorConnect. When you acquire a phone number you will typically know which type it is.

```yaml
Type: System.String
Parameter Sets: (Assignment)
Aliases:

Required: True
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReverseNumberLookup
This parameter is used to control the behavior of reverse number lookup (RNL) for a phone number.When RNL is set to 'SkipInternalVoip', an internal call to this phone number will not attempt to pass through internal VoIP via reverse number lookup in Microsoft Teams. Instead the call will be established through external PSTN connectivity directly.

```yaml
Type: String
Parameter Sets: (ReverseNumberLookupUpdate, Assignment)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Notify
Sends an email to Teams phone user about new telephone number assignment.

```yaml
Type: Switch
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
The cmdlet is available in Teams PowerShell module 3.0.0 or later. The parameter set LocationUpdate was introduced in Teams PowerShell module 5.3.1-preview. The parameter NetworkSiteId was introduced in Teams PowerShell module 5.5.0. The parameter set NetworkSiteUpdate was introduced in Teams PowerShell module 5.5.1-preview.

The cmdlet is only available in commercial and GCC cloud instances.

If a user or resource account has a phone number set in Active Directory on-premises and synched into Microsoft 365, you can't use Set-CsPhoneNumberAssignment to set the phone number. You will have to clear the phone number from the on-premises Active Directory and let that change sync into Microsoft 365 first.

The previous command for assigning phone numbers to users Set-CsUser had the parameter HostedVoiceMail. Setting HostedVoiceMail for Microsoft Teams users is no longer
necessary and that is why the parameter is not available on Set-CsPhoneNumberAssignment.

## RELATED LINKS
[Remove-CsPhoneNumberAssignment](https://learn.microsoft.com/powershell/module/teams/remove-csphonenumberassignment)

[Get-CsPhoneNumberAssignment](https://learn.microsoft.com/powershell/module/teams/get-csphonenumberassignment)
