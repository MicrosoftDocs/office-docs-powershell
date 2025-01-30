---
external help file: MicrosoftTeams-help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/new-csteamssharedcallingroutingpolicy
applicable: Microsoft Teams
author: serdarsoysal
ms.author: serdars
ms.reviewer:
manager:
title: New-CsTeamsSharedCallingRoutingPolicy
schema: 2.0.0
---

# New-CsTeamsSharedCallingRoutingPolicy

## SYNOPSIS
Use the New-CsTeamsSharedCallingRoutingPolicy cmdlet to configure a shared calling routing policy.

## SYNTAX

### Identity (Default)
```
New-CsTeamsSharedCallingRoutingPolicy [-Identity] <string> [-EmergencyNumbers <PSListModifier[string]>]
 [-ResourceAccount <string>] [-Description <string>]
 [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION

The Teams shared calling routing policy configures the caller ID for normal outbound PSTN and emergency calls made by users enabled for Shared Calling using this policy instance.

The caller ID for normal outbound PSTN calls is the phone number assigned to the resource account specified in the policy instance. Typically this is the organization's main auto attendant phone number. Callbacks will go to the auto attendant and the PSTN caller can use the auto attendant to be transferred to the shared calling user.

When a shared calling user makes an emergency call, the emergency services need to be able to make a direct callback to the user who placed the emergency call. One of the defined emergency numbers is used for this purpose as caller ID for the emergency call. It will be reserved for the next 60 minutes and any inbound call to that number will directly ring the shared calling user who made the emergency call. If no emergency numbers are defined, the phone number of the resource account is used as caller ID. If no free emergency numbers are available, the first number in the list is reused.

The emergency call will contain the location of the shared calling user. The location will be either the dynamic emergency location obtained by the Teams client or if that is not available the static location assigned to the phone number of the resource account used in the shared calling policy instance.

## EXAMPLES

### Example 1
```
$ra = Get-CsOnlineUser -Identity ra1@contoso.com
$PhoneNumber=Get-CsPhoneNumberAssignment -AssignedPstnTargetId ra1@contoso.com
$CivicAddress = Get-CsOnlineLisCivicAddress -City Seattle
Set-CsPhoneNumberAssignment -LocationId $CivicAddress.DefaultLocationId -PhoneNumber $PhoneNumber.TelephoneNumber
New-CsTeamsSharedCallingRoutingPolicy -Identity Seattle -ResourceAccount $ra.Identity -EmergencyNumbers @{add='+14255556677','+14255554321'} -Description 'Seattle'
```
The command shown in Example 1 gets the identity and phone number assigned to the Teams resource account ra1@contoso.com, sets the location of the phone number to be the Seattle location, and creates a new Shared Calling policy called Seattle that is using the Teams resource account ra1@contoso.com and the emergency numbers +14255556677 and +14255554321.

## PARAMETERS

### -Identity
Unique identifier of the Teams shared calling routing policy to be created.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
The description of the new policy instance.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EmergencyNumbers
An array of phone numbers used as caller ID on emergency calls.

The emergency numbers must be routable for inbound PSTN calls, and for Calling Plan and Operator Connect phone numbers, must be available within the organization.

The emergency numbers specified must all be of the same phone number type and country as the phone number assigned to the specified resource account. If the resource account has a Calling Plan service number assigned, the emergency numbers need to be Calling Plan subscriber numbers.

The emergency numbers must be unique and can't be reused in other shared calling policy instances. The emergency numbers can't be assigned to any user or resource account.

If no emergency numbers are configured, the phone number of the resource account is used as the Caller ID for the emergency call.

```yaml
Type: System.Management.Automation.PSListModifier[String]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResourceAccount
The Identity of the resource account. Can only be specified using the Identity or ObjectId of the resource account.

The phone number assigned to the resource account must:
- Have the same phone number type and country as the emergency numbers configured in this policy instance.
- Must have an emergency location assigned. You can use the Teams PowerShell Module [Set-CsPhoneNumberAssignment](https://learn.microsoft.com/powershell/module/teams/set-csphonenumberassignment) and the -LocationId parameter to set the location.
- If the resource account is using a Calling Plan service number, you must have a Pay-As-You-Go Calling Plan, and assign it to the resource account.  In addition, you need to assign a Communications credits license to the resource account and fund it to support outbound shared calling calls via the Pay-As-You-Go Calling Plan.

The same resource account can be used in multiple shared calling policy instances.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses any confirmation prompts that would otherwise be displayed before making changes.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: False
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
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES
In some Calling Plan markets, you are not allowed to set the location on service numbers. In this instance, kindly contact the [Telephone Number Services service desk](https://learn.microsoft.com/microsoftteams/phone-reference/manage-numbers/contact-tns-service-desk).

If you are attempting to use a resource account with an Operator Connect phone number assigned, you should confirm support for Shared Calling with your operator.

Shared Calling is not supported for Calling Plan service phone numbers in Romania, the Czech Republic, Hungary, Singapore, New Zealand, Australia, and Japan. A limited number of existing Calling Plan service phone numbers in other countries are also not supported for Shared Calling. For such service phone numbers, please contact the [Telephone Number Services service desk](https://learn.microsoft.com/microsoftteams/phone-reference/manage-numbers/contact-tns-service-desk).

This cmdlet was introduced in Teams PowerShell Module 5.5.0.

## RELATED LINKS
[Set-CsTeamsSharedCallingRoutingPolicy](https://learn.microsoft.com/powershell/module/teams/set-csteamssharedcallingroutingpolicy)

[Grant-CsTeamsSharedCallingRoutingPolicy](https://learn.microsoft.com/powershell/module/teams/grant-csteamssharedcallingroutingpolicy)

[Remove-CsTeamsSharedCallingRoutingPolicy](https://learn.microsoft.com/powershell/module/teams/remove-csteamssharedcallingroutingpolicy)

[Get-CsTeamsSharedCallingRoutingPolicy](https://learn.microsoft.com/powershell/module/teams/get-csteamssharedcallingroutingpolicy)

[Set-CsPhoneNumberAssignment](https://learn.microsoft.com/powershell/module/teams/set-csphonenumberassignment)
