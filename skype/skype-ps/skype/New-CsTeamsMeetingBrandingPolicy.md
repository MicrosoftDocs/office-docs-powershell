---
external help file: Microsoft.Teams.Policy.Administration.Cmdlets.Core.dll-Help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/skype/new-csteamsmeetingbrandingpolicy
schema: 2.0.0
title: New-CsTeamsMeetingBrandingPolicy
author: szymonkatraMSFT
ms.author: szymonkatra
ms.reviewer:
manager: stanlythomas
---

# New-CsTeamsMeetingBrandingPolicy

## SYNOPSIS
The CsTeamsMeetingBrandingPolicy cmdlets enable administrators to control the appearance in meetings by defining custom background, logo and colors.

## SYNTAX

```
New-CsTeamsMeetingBrandingPolicy
 [-NdiAssuranceSlateImages <System.Management.Automation.PSListModifier`1[Microsoft.Teams.Policy.Administration.Cmdlets.Core.NdiAssuranceSlate]>]
 [-MeetingBackgroundImages <System.Management.Automation.PSListModifier`1[Microsoft.Teams.Policy.Administration.Cmdlets.Core.MeetingBackgroundImage]>]
 [-MeetingBrandingThemes <System.Management.Automation.PSListModifier`1[Microsoft.Teams.Policy.Administration.Cmdlets.Core.MeetingBrandingTheme]>]
 [-DefaultTheme <String>] [-EnableMeetingOptionsThemeOverride <Boolean>] [-EnableNdiAssuranceSlate <Boolean>]
 [-EnableMeetingBackgroundImages <Boolean>] [-Identity] <String> [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet creates a new meeting branding policy.
However, it cannot be used to upload the images. If you want to upload the images, please use Teams Admin Center.

## EXAMPLES

### Create empty meeting branding policy
```powershell
PS C:\> New-CsTeamsMeetingBrandingPolicy -Identity "test policy"
```

In the example shown above, the command will create empty meeting branding policy with identity `test policy`.

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

## NOTES

Available in Teams PowerShell Module 4.9.3 or later.

## RELATED LINKS

[Get-CsTeamsMeetingBrandingPolicy](Get-CsTeamsMeetingBrandingPolicy.md)
[Grant-CsTeamsMeetingBrandingPolicy](Grant-CsTeamsMeetingBrandingPolicy.md)
[New-CsTeamsMeetingBrandingPolicy](New-CsTeamsMeetingBrandingPolicy.md)
[Remove-CsTeamsMeetingBrandingPolicy](Remove-CsTeamsMeetingBrandingPolicy.md)
[Set-CsTeamsMeetingBrandingPolicy](Set-CsTeamsMeetingBrandingPolicy.md)