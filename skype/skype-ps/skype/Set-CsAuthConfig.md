: ---
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
Use the Set-CsAuthConfig cmdlet to modify the authentication configuration for your organization. The 5 supported scenarios are described in the following list. Scenario is a required parameter. All other parameters are optional. MA is Modern Authentication and Win is Windows Integrated Authentication in the following list.

- **Scenario 1**: External: MA + Win; Internal: MA + Win; Parameter: AllowAllExternallyAndInternally. This is the default scenario when MA is turned on for Skype for Business Server. In other words, this is the starting point when MA is configured. 

- **Scenario 2**: External: MA; Internal: MA + Win; Parameter: BlockWindowsAuthExternally. This topology blocks NTLM externally, but allows NTLM or Kerberos (for clients that don't support ADAL) to work internally. If your clients do support ADAL they will use MA internally.

- **Scenario 3**: External: MA; Internal: MA; Parameter: BlockWindowsAuthExternallyAndInternally. This topology requires MA for all users. All your ADAL-capable clients will work in this topology, and passwords will not be leveraged if, for example, you turn off the use of passwords with Certificate-based Auth. 

- **Scenario 4**: External: MA; Internal: Win; Parameter: BlockWindowsAuthExternallyAndModernAuthInternally. This topology blocks NTLM externally and MA internally. It allows all clients to use legacy authentication methods internally (even ADAL-capable clients).

- **Scenario 5**: External: MA + Win; Internal: Win; Parameter: BlockModernAuthInternally. Externally, your modern ADAL clients will use MA and any clients that don't support ADAL will use legacy authentication methods. But, internally all clients will use legacy authentication (including all ADAL-capable clients).

This cmdlet sets configuration on both the Registrar and the Web Services roles.

It is only meant to be run at the global level (and not at the pool level), and we highly recommend that you only use it in this manner. However, technically it can be run at a pool level. But realize that if the pool only has one of the roles needed (say, Registrar and not Web Services), then only the settings for Registrar will be set and the Web Services settings will come from the global setting. No special warning will be given because some settings were not set. If a client uses the Registrar settings from one pool and the Web Services settings from another pool and the authentication settings are in an inconsistent state, the client may be unable to log on. If neither role is present for a pool, both Get will return an error message. If both roles are present for a pool but policies aren't defined at the pool level, Get will return an error message.


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
