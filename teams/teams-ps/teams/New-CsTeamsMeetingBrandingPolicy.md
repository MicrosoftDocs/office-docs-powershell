---
external help file: Microsoft.Teams.Policy.Administration.Cmdlets.Core.dll-Help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/new-csteamsmeetingbrandingpolicy
schema: 2.0.0
title: New-CsTeamsMeetingBrandingPolicy
author: serdarsoysal
ms.author: serdars
ms.reviewer:
manager: stanlythomas
---

# New-CsTeamsMeetingBrandingPolicy

## SYNOPSIS
The **CsTeamsMeetingBrandingPolicy** cmdlet enables administrators to control the appearance in meetings by defining custom backgrounds, logos, and colors.

## SYNTAX

```powershell
New-CsTeamsMeetingBrandingPolicy
 [-MeetingBackgroundImages <PSListModifier>]
 [-MeetingBrandingThemes <PSListModifier>]
 [-DefaultTheme <String>] [-EnableMeetingOptionsThemeOverride <Boolean>]
 [-EnableNdiAssuranceSlate <Boolean>] [-NdiAssuranceSlateImages <PSListModifier>] [-RequireBackgroundEffect <Boolean>]
 [-EnableMeetingBackgroundImages <Boolean>] [-Identity] <String> [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet creates a new **TeamsMeetingBrandingPolicy**.
You can only create an empty meeting branding policy with this cmdlet, image upload is not supported.
If you want to upload the images, you should use Teams Admin Center.

## EXAMPLES

### Create empty meeting branding policy
```powershell
PS C:\> New-CsTeamsMeetingBrandingPolicy -Identity "test policy"
```

In this example, the command will create an empty meeting branding policy with the identity `test policy`.

## PARAMETERS

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
Enable custom meeting backgrounds.

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
Allow organizer to control meeting theme.

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

### -Identity
Identity of meeting branding policy that will be created.

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
Image upload is not possible via cmdlets. You should upload background images via Teams Admin Center.

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
*This parameter is reserved for Microsoft internal use only.*
List of meeting branding themes.
Image upload is not possible via cmdlets. You should create meeting themes via Teams Admin Center.

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

### -EnableNdiAssuranceSlate
This enables meeting Network Device Interface Assurance Slate branding.

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

### -NdiAssuranceSlateImages
Used to specify images that can be used as assurance slates during NDI (Network Device Interface) streaming in Teams meetings. This parameter allows administrators to define a set of images that can be displayed to participants to ensure that the NDI stream is functioning correctly.

```yaml
Type: System.Management.Automation.PSListModifier`1[Microsoft.Teams.Policy.Administration.Cmdlets.Core.NdiAssuranceSlate]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequireBackgroundEffect
This mandates a meeting background for participants.

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
