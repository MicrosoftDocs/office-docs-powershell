---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/get-csonlinevoiceuser
applicable: Microsoft Teams
title: Get-CsOnlineVoiceUser
schema: 2.0.0
manager: bulenteg
author: serdarsoysal
ms.author: serdars
ms.reviewer:
---

# Get-CsOnlineVoiceUser

## SYNOPSIS
Use the `Get-CsOnlineVoiceUser` cmdlet to retrieve a voice user's telephone number and location.

## SYNTAX

```
Get-CsOnlineVoiceUser [-CivicAddressId <XdsCivicAddressId>] [-DomainController <Fqdn>] [-EnterpriseVoiceStatus <MultiValuedProperty>] [-ExpandLocation] [-First <Unlimited>] [-Force] [-GetFromAAD] [-GetPendingUsers] [-Identity <UserIdParameter>] [-LocationId <LocationID>] [-NumberAssigned] [-NumberNotAssigned] [-PSTNConnectivity <MultiValuedProperty>] [-SearchQuery <String>] [-Skip <Unlimited>] [-Tenant <Guid>]
 [<CommonParameters>]
```

## DESCRIPTION

**Note**: This cmdlet **is no longer supported** on the public and GCC cloud instances. You should use the replacement cmdlets described here.

The following table lists the parameters to `Get-CsOnlineVoiceUser` and the alternative method of getting the same data using a combination of `Get-CsOnlineUser`, `Get-CsPhoneNumberAssignment`, `Get-CsOnlineLisLocation`, and `Get-CsOnlineLisCivicAddress`.

| Parameter | Description | Alternative |
| :------------| :------- | :------- |
| No parameters | Get information for all users | `Get-CsOnlineUser -Filter {(FeatureTypes -contains 'PhoneSystem') -and (AccountEnabled -eq $True)} -AccountType User` |
| CivicAddressId | Find phone number information where the assigned phone number is associated with the CivicAddressId | `Get-CsPhoneNumberAssignment -CivicAddressId <CivicAddressId>` |
| EnterpriseVoiceStatus | Find enabled users based on EnterpriseVoiceEnabled | `Get-CsOnlineUser -Filter {(EnterpriseVoiceEnabled -eq $True) -and (FeatureTypes -contains 'PhoneSystem') -and (AccountEnabled -eq $True)} -AccountType User` or `Get-CsOnlineUser -Filter {(EnterpriseVoiceEnabled -eq $False) -and (FeatureTypes -contains 'PhoneSystem') -and (AccountEnabled -eq $True)} -AccountType User`  |
| ExpandLocation | Show information about the LocationId | `Get-CsOnlineLisLocation -LocationId <LocationId>` |
| Identity | Get information for a user | `Get-CsOnlineUser -Identity <Identity>` |
| LocationId | Find phone number information where the assigned phone number is associated with the LocationId | `Get-CsPhoneNumberAssignment -LocationId <LocationId>` |
| NumberAssigned | Find enabled users with a phone number assigned | `Get-CsOnlineUser -Filter {(LineUri -ne $Null) -and (FeatureTypes -contains 'PhoneSystem') -and (AccountEnabled -eq $True)} -AccountType User` |
| NumberNotAssigned | Find users without a phone number assigned | `Get-CsOnlineUser -Filter {(LineUri -eq $Null) -and (FeatureTypes -contains 'PhoneSystem') -and (AccountEnabled -eq $True)} -AccountType User` |
| PSTNConnectivity | Find enabled users with PhoneSystem (OnPremises) or CallingPlan (Online) | Online: `Get-CsOnlineUser -Filter {(FeatureTypes -contains 'CallingPlan') -and (AccountEnabled -eq $True)} -AccountType User` OnPremises: `Get-CsOnlineUser -Filter {-not (FeatureTypes -contains 'CallingPlan') -and (FeatureTypes -contains 'PhoneSystem') -and (AccountEnabled -eq $True)} -AccountType User` |

The following table lists the output fields from `Get-CsOnlineVoiceUser` and the alternative method of getting the same information using a combination of `Get-CsOnlineUser`, `Get-CsPhoneNumberAssignment`, and `Get-CsOnlineLisLocation`.

| Output field | Alternative |
| :---------------------------------| :--------------------------------- |
| Name | DisplayName in the output from `Get-CsOnlineUser` |
| Id | Identity in the output from `Get-CsOnlineUser`|
| SipDomain | Extract SipDomain from the SipAddress in the output from `Get-CsOnlineUser` |
| DataCenter | Extract DataCenter from RegistrarPool in the output from `Get-CsOnlineUser`|
| TenantId | TenantId in the output from `Get-CsOnlineUser`|
| PstnConnectivity | FeatureTypes in the output from `Get-CsOnlineUser`. If FeatureTypes contains `CallingPlan`, PstnConnectivity is `Online`. If FeatureTypes contains `PhoneSystem` and does not contain `CallingPlan`, PstnConnectivity is `OnPremises` |
| UsageLocation | UsageLocation in the output from `Get-CsOnlineUser` |
| EnterpriseVoiceEnabled | EnterpriseVoiceEnabled in the output from `Get-CsOnlineUser` |
| Number | LineUri in the output from `Get-CsOnlineUser`. You can get same phone number format by doing LineUri.Replace('tel:+','')  |
| Location | Use LocationId in the output from `Get-CsPhoneNumberAssignment -AssignedPstnTargetId <Identity>` as the input to `Get-CsOnlineLisLocation -LocationId` |

In Teams PowerShell Module version 3.0 and later in commercial cloud (and Teams PowerShell Module versions 5.0.1 and later in GCCH and DOD), the following improvements have been introduced for organizations using Teams:
- This cmdlet now accurately returns users who are voice-enabled (the older cmdlet in version 2.6.0 and earlier returned users without MCOEV* plans assigned).
- The result size is not limited to 100 users anymore (the older cmdlet in version 2.6.0 and earlier limited the result size to 100).

In Teams PowerShell Module version 2.6.2 and later in commercial cloud (and Teams PowerShell Module versions 5.0.1 and later in GCCH and DOD), the following attributes are deprecated for organizations with Teams users using the ExpandLocation parameter:

- Force
- NumberOfResultsToSkip
- CorrelationId
- Verb
- ResultSize
- LicenceState

In Teams PowerShell Module version 2.6.2 and later in commercial cloud (and Teams PowerShell Module versions 5.0.1 and later in GCCH and DOD), the following input parameters are deprecated for organizations with Teams users due to low or zero usage:

- DomainController
- Force
- GetFromAAD
- GetPendingUsers
- SearchQuery
- Skip
- Tenant
- Common Parameters

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
PS C:\> Get-CsOnlineVoiceUser -Identity Ken.Myer@contoso.com
```

This example uses the User Principal Name (UPN) to retrieve the location and phone number information.

## PARAMETERS

### -CivicAddressId
Specifies the identity of the civic address that is assigned to the target users.

```yaml
Type: XdsCivicAddressId
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
This parameter is reserved for internal Microsoft use.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: DC
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnterpriseVoiceStatus
Possible values are:
* All
* Enabled
* Disabled

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExpandLocation
Displays the location parameter with its value.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -First
Specifies the number of users to return.
The default is 100.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
*This parameter has been deprecated from Teams PowerShell Modules 3.0 and above due to limited usage*.

The Force switch specifies whether to suppress warning and confirmation messages.
It can be useful in scripting to suppress interactive prompts.
If the Force switch isn't provided in the command, you're prompted for administrative input if required.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GetFromAAD
*This parameter has been deprecated from Teams PowerShell Modules 3.0 and above due to limited usage*.

Use this switch to get the users from Microsoft Entra ID.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GetPendingUsers
*This parameter has been deprecated from Teams PowerShell Modules 3.0 and above due to limited usage*.

Use this switch to get only the users in pending state.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Specifies the identity of the target user.
Acceptable values include:

Example: jphillips@contoso.com

Example: sip:jphillips@contoso.com

Example: 98403f08-577c-46dd-851a-f0460a13b03d

```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocationId
Specifies the location identity of the location whose users will be returned.
You can find location identifiers by using the `Get-CsOnlineLisLocation` cmdlet.

```yaml
Type: LocationID
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NumberAssigned
If specified, the query will return users who have a phone number assigned.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NumberNotAssigned
If specified, the query will return users who do not have a phone number assigned.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PSTNConnectivity

Possible values are:
* All
* Online
* OnPremises

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SearchQuery
*This parameter has been deprecated from Teams PowerShell Modules 3.0 and above due to limited usage*.

The SearchQuery parameter specifies a search string or a query formatted using Keyword Query Language (KQL). For more details about KQL, see Keyword Query Language syntax reference (https://go.microsoft.com/fwlink/p/?linkid=269603).

If this parameter is empty, all users are returned.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Skip
Specifies the number of users to skip.
If you used the First parameter to return the first 50 users and wanted to get another 50, you could use -Skip 50 to avoid returning the first 50 you've already reviewed.
The default is 0.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
*This parameter has been deprecated from Teams PowerShell Modules 3.0 and above due to limited usage*.

This parameter is reserved for internal Microsoft use.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### Deserialized.Microsoft.Rtc.Management.Hosted.Bvd.Types.LacUser

## NOTES

## RELATED LINKS
[Set-CsOnlineVoiceUser](https://learn.microsoft.com/powershell/module/teams/set-csonlinevoiceuser)
