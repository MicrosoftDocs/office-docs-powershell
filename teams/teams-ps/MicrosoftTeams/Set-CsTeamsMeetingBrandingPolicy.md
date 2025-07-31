---
applicable: Microsoft Teams
author: serdarsoysal
external help file: Microsoft.Teams.Policy.Administration.Cmdlets.Core.dll-Help.xml
Locale: en-US
manager: stanlythomas
Module Name: MicrosoftTeams
ms.author: serdars
online version: https://learn.microsoft.com/powershell/module/teams/set-csteamsmeetingbrandingpolicy
schema: 2.0.0
title: Set-CsTeamsMeetingBrandingPolicy
---

# Set-CsTeamsMeetingBrandingPolicy

## SYNOPSIS
The **CsTeamsMeetingBrandingPolicy** cmdlet enables administrators to control the appearance in meetings by defining custom backgrounds, logos, and colors.

## SYNTAX

```
Set-CsTeamsMeetingBrandingPolicy
 [-MeetingBackgroundImages <PSListModifier>]
 [-MeetingBrandingThemes <PSListModifier>]
 [-DefaultTheme <String>] [-EnableMeetingOptionsThemeOverride <Boolean>]
 [-EnableMeetingBackgroundImages <Boolean>] [-Identity] <String> [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
The `Set-CsTeamsMeetingBrandingPolicy` cmdlet allows administrators to update existing meeting branding policies.
However, it cannot be used to upload the images. If you want to upload the images, you should use Teams Admin Center.

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-CsTeamsMeetingBrandingPolicy
PS C:\> $brandingPolicy = Get-CsTeamsMeetingBrandingPolicy -Identity "demo branding"
PS C:\> $brandingPolicy.MeetingBrandingThemes[0].BrandAccentColor = "#FF0000"
PS C:\> Set-CsTeamsMeetingBrandingPolicy -Identity "demo branding" -MeetingBrandingThemes $brandingPolicy.MeetingBrandingThemes
```

In this example, the commands will change the brand accent color of the theme inside the `demo branding` meeting branding policy to `#FF0000`

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

### -DefaultTheme
*This parameter is reserved for Microsoft internal use only.*
Identity of default meeting theme.

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

### -EnableMeetingBackgroundImages
Enables custom meeting backgrounds.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableMeetingOptionsThemeOverride
Allows organizers to control meeting themes.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
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
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Identity of meeting branding policy that will be updated. To refer to the global policy, use this syntax: `-Identity global`.

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

### -MeetingBackgroundImages
*This parameter is reserved for Microsoft internal use only.*
List of meeting background images.
It is not possible to add or remove background images using cmdlets. You should use Teams Admin Center for that purpose.

```yaml
Type: PSListModifier
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MeetingBrandingThemes
List of meeting branding themes. You can alter the list returned by the `Get-CsTeamsMeetingBrandingPolicy` cmdlet and pass it to this parameter.
It is not possible to add or remove meeting branding themes using cmdlets. You should use Teams Admin Center for that purpose.

```yaml
Type: PSListModifier
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Describes what would happen if you executed the command without actually executing the command.

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
This cmdlet supports the common parameters: `-Debug`, `-ErrorAction`, `-ErrorVariable`, `-InformationAction`, `-InformationVariable`, `-OutVariable`, `-OutBuffer`, `-PipelineVariable`, `-Verbose`, `-WarningAction`, and `-WarningVariable`. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

Available in Teams PowerShell Module 4.9.3 and later.

## RELATED LINKS

[Get-CsTeamsMeetingBrandingPolicy](https://learn.microsoft.com/powershell/module/teams/get-csteamsmeetingbrandingpolicy)

[Grant-CsTeamsMeetingBrandingPolicy](https://learn.microsoft.com/powershell/module/teams/grant-csteamsmeetingbrandingpolicy)

[New-CsTeamsMeetingBrandingPolicy](https://learn.microsoft.com/powershell/module/teams/new-csteamsmeetingbrandingpolicy)

[Remove-CsTeamsMeetingBrandingPolicy](https://learn.microsoft.com/powershell/module/teams/remove-csteamsmeetingbrandingpolicy)

[Set-CsTeamsMeetingBrandingPolicy](https://learn.microsoft.com/powershell/module/teams/set-csteamsmeetingbrandingpolicy)
