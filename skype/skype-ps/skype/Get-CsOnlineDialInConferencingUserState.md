---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml 
online version: https://docs.microsoft.com/powershell/module/skype/get-csonlinedialinconferencinguserstate
applicable: Skype for Business Online
title: Get-CsOnlineDialInConferencingUserState
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer:
---

# Get-CsOnlineDialInConferencingUserState

## SYNOPSIS
Use the `Get-CsOnlineDialInConferencingUserState` cmdlet to view the current Dial In Conferencing state of users in your Tenant.

## SYNTAX

```
Get-CsOnlineDialInConferencingUserState [[-Identity] <UserIdParameter>] [-Tenant <Guid>]
 [-TenantDomain <String>] [-Provider <ProviderType>] [-LicenseState <String[]>]
 [-ResultSize <Unlimited>] [-DomainController <Fqdn>] [-Force] [<CommonParameters>]
```

## DESCRIPTION
Use the `Get-CsOnlineDialInConferencingUserState` cmdlet to view the current Dial In Conferencing state of users in your Tenant.

## EXAMPLES

### Example 1
```
Get-CsOnlineDialInConferencingUserState
```
Gets the Dial In Conferencing state of every user.

## PARAMETERS

### -DomainController
This parameter is reserved for internal Microsoft use.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: DC

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
The Force switch specifies whether to suppress warning and confirmation messages. It can be useful in scripting to suppress interactive prompts. If the Force switch isn't provided in the command, you're prompted for administrative input if required.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Specifies the user to retrieve. The user can be specified by using the user's SIP address, the user's user principal name (UPN) or the user's display name (for example, Ken Myer).

```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -LicenseState
License state of the user, possible values
- NoLicense
- Licensed

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Provider
Audio Conferencing Provider name, possible values
- AllProviders
- NoProviders
- Microsoft
- ThirdParty

```yaml
Type: ProviderType
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResultSize
PARAMVALUE: Unlimited

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:

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

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TenantDomain
This parameter is reserved for internal Microsoft use.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable.
For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
