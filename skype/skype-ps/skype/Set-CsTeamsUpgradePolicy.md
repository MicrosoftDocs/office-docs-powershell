---
external help file: Microsoft.Rtc.Management.dll-Help.xml
Module Name: SkypeForBusiness
online version:
applicable: Skype for Business Server 2019
title: Set-CsTeamsUpgradePolicy
schema: 2.0.0
---

# Set-CsTeamsUpgradePolicy

## SYNOPSIS
{{Fill in the Synopsis}}

## SYNTAX

### Identity (Default)
```
Set-CsTeamsUpgradePolicy [-Tenant <Guid>] [-Description <String>] [-NotifySfbUsers <Boolean>]
 [[-Identity] <XdsIdentity>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### Instance
```
Set-CsTeamsUpgradePolicy [-Tenant <Guid>] [-Description <String>] [-NotifySfbUsers <Boolean>]
 [-Instance <PSObject>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
{{Fill in the Description}}

## EXAMPLES

### Example 1
```powershell
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

## PARAMETERS

### -Confirm
Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Skype for Business Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
{{Fill Description Description}}

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
{{Fill Force Description}}

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
{{Fill Identity Description}}

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases:
Applicable: Skype for Business Server 2019
Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
{{Fill Instance Description}}

```yaml
Type: PSObject
Parameter Sets: Instance
Aliases:
Applicable: Skype for Business Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -NotifySfbUsers
{{Fill NotifySfbUsers Description}}

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
{{Fill Tenant Description}}

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Server 2019
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
Applicable: Skype for Business Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable.
For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.Management.Automation.PSObject


## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

[Migration and interoperability guidance for organizations using Teams together with Skype for Business](https://docs.microsoft.com/en-us/MicrosoftTeams/migration-interop-guidance-for-teams-with-skype)
