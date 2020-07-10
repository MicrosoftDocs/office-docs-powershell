---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://docs.microsoft.com/powershell/module/skype/get-csonlinevoiceuser
applicable: Skype for Business Online
title: Get-CsOnlineVoiceUser
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
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
Applicable: Skype for Business Online

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
Applicable: Skype for Business Online

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
Applicable: Skype for Business Online

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
Applicable: Skype for Business Online

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
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
The Force switch specifies whether to suppress warning and confirmation messages.
It can be useful in scripting to suppress interactive prompts.
If the Force switch isn't provided in the command, you're prompted for administrative input if required.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GetFromAAD
Use this switch to get the users from Azure Active Directory.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GetPendingUsers
Use this switch to get only the users in pending state.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

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
Applicable: Skype for Business Online

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
Applicable: Skype for Business Online

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
Applicable: Skype for Business Online

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
Applicable: Skype for Business Online

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
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SearchQuery
The SearchQuery parameter specifies a search string or a query formatted using Keyword Query Language (KQL). For more details about KQL, see Keyword Query Language syntax reference (https://go.microsoft.com/fwlink/p/?linkid=269603).

If this parameter is empty, all users are returned.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

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
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
This parameter is reserved for internal Microsoft use.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).


## INPUTS

### None


## OUTPUTS

### Deserialized.Microsoft.Rtc.Management.Hosted.Bvd.Types.LacUser


## NOTES


## RELATED LINKS
[Set-CsOnlineVoiceUser](https://docs.microsoft.com/powershell/module/skype/set-csonlinevoiceuser?view=skype-ps)

[Set-CsOnlineVoiceUserBulk](https://docs.microsoft.com/powershell/module/skype/set-csonlinevoiceuserbulk?view=skype-ps)
