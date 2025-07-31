---
applicable: Microsoft Teams
external help file: Microsoft.Rtc.Management.dll-help.xml
Locale: en-US
manager: ritikag
Module Name: MicrosoftTeams
ms.reviewer: ritikag
online version: https://learn.microsoft.com/powershell/module/teams/set-csteamsmobilitypolicy
schema: 2.0.0
title: Set-CsTeamsMobilityPolicy
---

# Set-CsTeamsMobilityPolicy

## SYNOPSIS
The TeamsMobilityPolicy allows Admins to control Teams mobile usage for users.

## SYNTAX

### Identity (Default)
```
Set-CsTeamsMobilityPolicy [-Tenant <System.Guid>] [-Description <String>] [-IPVideoMobileMode <String>]
 [-IPAudioMobileMode <String>] [[-Identity] <XdsIdentity>] [-MobileDialerPreference <String>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### Instance
```
Set-CsTeamsMobilityPolicy [-Tenant <System.Guid>] [-Description <String>] [-IPVideoMobileMode <String>]
 [-IPAudioMobileMode <String>] [-Instance <PSObject>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
The TeamsMobilityPolicy allows Admins to control Teams mobile usage for users.

The Set-CsTeamsMobilityPolicy cmdlet allows administrators to update teams mobility policies.

## EXAMPLES

### Example 1
```powershell
PS C:\> Set-CsTeamsMobilityPolicy -Identity SalesPolicy -IPVideoMobileMode "WifiOnly
```
The command shown in Example 1 uses the Set-CsTeamsMobilityPolicy cmdlet to update an existing teams mobility policy with the Identity SalesPolicy. This SalesPolicy will not have IPVideoMobileMode equal to "WifiOnly".

## PARAMETERS

### -Confirm
Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
Enables administrators to provide explanatory text about the policy. For example, the Description might indicate the users the policy should be assigned to.

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

### -Force
Bypasses all non-fatal errors.

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

### -Identity
Specify the name of the policy that you are creating.

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IPAudioMobileMode
When set to WifiOnly, prohibits the user from making, receiving calls or joining meetings using VoIP calls on the mobile device while on cellular data connection.

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

### -IPVideoMobileMode
When set to WifiOnly, prohibits the user from making, receiving video calls or enabling video in meetings using VoIP calls on the mobile device while on cellular data connection.

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

### -MobileDialerPreference
Determines the mobile dialer preference, possible values are: Teams, Native, UserOverride.
For more information, see [Manage user incoming calling policies](https://learn.microsoft.com/microsoftteams/operator-connect-mobile-configure#manage-user-incoming-calling-policies).

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

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.Management.Automation.PSObject

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
