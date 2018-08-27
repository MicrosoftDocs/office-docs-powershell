---
external help file: Microsoft.Rtc.Management.dll-Help.xml
applicable: Skype for Business Server 2019
title: Set-CsAuthConfig
schema: 2.0.0
---

# Set-CsAuthConfig

## SYNOPSIS
Use the Set-CsAuthConfig cmdlet to modify the authentication configuration for your organization.

## SYNTAX

```
Set-CsAuthConfig [-Scenario] <AuthConfigScenario> [[-Pool] <String>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Use the Set-CsAuthConfig cmdlet to modify the authentication configuration for your organization. 
There are 5 different configurations that are supported as you can see in the parameters section. 


This cmdlet sets configuration on both the Registrar and the Web Services roles.  
It is only meant to be run at the global level (and not at the pool level), and we highly recommend that you only use it in this manner.
However, technically it can be run at a pool level.
But realize that if the pool only has one of the roles needed (say, Registrar and not Web Services), then only the settings for Registrar will be set and the Web Services settings will come from the global setting.
No special warning will be given because some settings were not set.
If a client uses the Registrar settings from one pool and the Web Services settings from another pool and the authentication settings are in an inconsistent state, the client may be unable to log on.
If neither role is present for a pool, both Get will return an error message.
If both roles are present for a pool but policies aren't defined at the pool level, Get will return an error message.


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
applicable: Skype for Business Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Pool
{{Fill Pool Description}}

```yaml
Type: String
Parameter Sets: (All)
Aliases:
applicable: Skype for Business Server 2019
Required: False
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Scenario
{{Fill Scenario Description}}

```yaml
Type: AuthConfigScenario
Parameter Sets: (All)
Aliases:
Accepted values: Custom, AllowAllExternallyAndInternally, BlockWindowsAuthExternally, BlockWindowsAuthExternallyAndInternally, BlockWindowsAuthExternalyAndModernAuthInternally, BlockModernAuthInternally
applicable: Skype for Business Server 2019
Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
applicable: Skype for Business Server 2019
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

### Microsoft.Rtc.Management.Authentication.AuthConfigScenario

### System.String

## OUTPUTS

### System.Object
## NOTES

## RELATED LINKS
