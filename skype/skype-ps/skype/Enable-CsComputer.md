---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Enable-CsComputer

## SYNOPSIS
Enables new or newly-updated services or server roles on a computer running Skype for Business Server.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Enable-CsComputer [-GlobalCatalog <Fqdn>] [-Report <String>] [-Force] [-WhatIf] [-Confirm]
 [-GlobalSettingsDomainController <Fqdn>] [<CommonParameters>]
```

## DESCRIPTION
Installing the required software does not automatically cause a computer to adopt a new service role; instead, that computer must be enabled before it actually begins to function in its new role.
The Enable-CsComputer cmdlet provides a way for administrators to enable newly updated services or server roles on the local computer.

You must be a local administrator and a member of the domain in order to run the Enable-CsComputer cmdlet locally.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Enable-CsComputer
```

The command shown in Example 1 activates any new Skype for Business Server services or server roles that have been installed on the local computer.

### -------------------------- Example 2 --------------------------
```
Enable-CsComputer -Verbose
```

Example 2 also activates any new Skype for Business Server services or server roles that have been installed on the local computer.
In this case, however, the addition of the Verbose parameter ensures that a step-by-step account of the tasks being carried out by the Enable-CsComputer cmdlet will be reported on the screen.


## PARAMETERS

### -GlobalCatalog
Fully qualified domain name (FQDN) of a global catalog server in your domain.
This parameter is not required if you are running the Enable-CsComputer cmdlet on a computer with an account in your domain.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Report
Enables you to specify a file path for the log file created when the cmdlet runs.
For example: 

`-Report "C:\Logs\EnableComputer.html"`

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses the display of any non-fatal error message that might occur when running the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GlobalSettingsDomainController
FQDN of a domain controller where global settings are stored.
If global settings are stored in the System container in Active Directory, then this parameter must point to the root domain controller.
If global settings are stored in the Configuration container, then any domain controller can be used and this parameter can be omitted.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).


## INPUTS

### None


## OUTPUTS

### None
Instead, the Enable-CsComputer cmdlet enables instances of the Microsoft.Rtc.Management.Deploy.Internal.Machine object.


## NOTES


## RELATED LINKS

[Disable-CsComputer]()

[Get-CsComputer]()

[Test-CsComputer]()