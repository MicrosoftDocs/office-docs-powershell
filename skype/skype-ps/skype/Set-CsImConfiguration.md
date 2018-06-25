---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Skype for Business Server 2015, Skype for Business Server 2019
title: Set-CsImConfiguration
schema: 2.0.0
---

# Set-CsImConfiguration

## SYNOPSIS
Use the Set-CsImConfiguration cmdlet to modify an existing Instant Messaging (IM) configuration. This cmdlet was introduced in Skype for Business June 2016 Cumulative Update.

## SYNTAX

### Identity
```
Set-CsImConfiguration [[-Identity] <XdsIdentity>] [-Confirm] [-EnableOfflineIm <Boolean>] [-Force]
 [-Tenant <Guid>] [-WhatIf] [<CommonParameters>]
```

### Instance
```
Set-CsImConfiguration [-Confirm] [-EnableOfflineIm <Boolean>] [-Force] [-Instance <PSObject>] [-Tenant <Guid>]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Use the Set-CsImConfiguration cmdlet to modify an existing Instant Messaging (IM) configuration.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-CsImConfiguration -Identity "Site:Redmond" -EnableOfflineIm $false
```

This example modifies the existing Redmond site IM configuration to disable the offline IM feature.

## PARAMETERS

### -Confirm
Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableOfflineIm
Enables or disable Offline Instant Messaging.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
A unique identifier specifying the scope and, in some cases the name, of the IM configuration.

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values. This object must be of type IMConfiguration and can be retrieved by calling the Get-CsImConfiguration cmdlet.

```yaml
Type: PSObject
Parameter Sets: Instance
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Tenant
This parameter is reserved for internal Microsoft use.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the cmdlet runs. The cmdlet is not run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.Management.Automation.PSObject

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
[Get-CsImConfiguration](https://docs.microsoft.com/en-us/powershell/module/skype/get-csimconfiguration?view=skype-ps)

[New-CsImConfiguration](https://docs.microsoft.com/en-us/powershell/module/skype/new-csimconfiguration?view=skype-ps)

[Remove-CsImConfiguration](https://docs.microsoft.com/en-us/powershell/module/skype/remove-csimconfiguration?view=skype-ps)
