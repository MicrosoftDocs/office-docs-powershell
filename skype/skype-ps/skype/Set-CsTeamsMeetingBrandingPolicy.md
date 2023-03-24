---
external help file: Microsoft.Teams.Policy.Administration.Cmdlets.Core.dll-Help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/skype/set-csteamsmeetingbrandingpolicy
schema: 2.0.0
title: Set-CsTeamsMeetingBrandingPolicy
author: szymonkatraMSFT
ms.author: szymonkatra
ms.reviewer:
manager: stanlythomas
applicable: Skype for Business Online
---

# Set-CsTeamsMeetingBrandingPolicy

## SYNOPSIS
The CsTeamsMeetingBrandingPolicy cmdlets enable administrators to control the appearance in meetings by defining custom background, logo and colors.

## SYNTAX

```
Set-CsTeamsMeetingBrandingPolicy
 [-NdiAssuranceSlateImages <System.Management.Automation.PSListModifier`1[Microsoft.Teams.Policy.Administration.Cmdlets.Core.NdiAssuranceSlate]>]
 [-MeetingBackgroundImages <System.Management.Automation.PSListModifier`1[Microsoft.Teams.Policy.Administration.Cmdlets.Core.MeetingBackgroundImage]>]
 [-MeetingBrandingThemes <System.Management.Automation.PSListModifier`1[Microsoft.Teams.Policy.Administration.Cmdlets.Core.MeetingBrandingTheme]>]
 [-DefaultTheme <String>] [-EnableMeetingOptionsThemeOverride <Boolean>] [-EnableNdiAssuranceSlate <Boolean>]
 [-EnableMeetingBackgroundImages <Boolean>] [-Identity] <String> [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
The Set-CsTeamsMeetingBrandingPolicy cmdlet allows administrators to update existing meeting branding policies.
However, it cannot be used to upload the images. If you want to upload the images, please use Teams Admin Center.

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-CsTeamsMeetingBrandingPolicy
PS C:\> $brandingPolicy = Get-CsTeamsMeetingBrandingPolicy -Identity "demo branding"
PS C:\> $brandingPolicy.MeetingBrandingThemes[0].BrandAccentColor = "#FF0000"
PS C:\> Set-CsTeamsMeetingBrandingPolicy -Identity "demo branding" -MeetingBrandingThemes $brandingPolicy.MeetingBrandingThemes
```

In the example shown above, the commands will change brand accent color of theme inside the `demo branding` meeting branding policy to `#FF0000`. 

## PARAMETERS

### -DefaultTheme
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
Identity of meeting branding policy that will be updated. To refer to the global policy, use this syntax: -Identity global.

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
List of meeting background images.

```yaml
Type: System.Management.Automation.PSListModifier`1[Microsoft.Teams.Policy.Administration.Cmdlets.Core.MeetingBackgroundImage]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MeetingBrandingThemes
List of meeting branding themes.

```yaml
Type: System.Management.Automation.PSListModifier`1[Microsoft.Teams.Policy.Administration.Cmdlets.Core.MeetingBrandingTheme]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

## NOTES

Available in Teams PowerShell Module 4.9.3 or later.

## RELATED LINKS

[Get-CsTeamsMeetingBrandingPolicy](Get-CsTeamsMeetingBrandingPolicy.md)
[Grant-CsTeamsMeetingBrandingPolicy](Grant-CsTeamsMeetingBrandingPolicy.md)
[New-CsTeamsMeetingBrandingPolicy](New-CsTeamsMeetingBrandingPolicy.md)
[Remove-CsTeamsMeetingBrandingPolicy](Remove-CsTeamsMeetingBrandingPolicy.md)
[Set-CsTeamsMeetingBrandingPolicy](Set-CsTeamsMeetingBrandingPolicy.md)