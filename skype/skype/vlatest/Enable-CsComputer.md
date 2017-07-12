---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Enable-CsComputer

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Enables new or newly-updated services or server roles on a computer running Microsoft Lync Server 2010.

**Below Content Applies To:** Lync Server 2013

Enables new or newly-updated services or server roles on a computer running Lync Server.
This cmdlet was introduced in Lync Server 2010.

**Below Content Applies To:** Skype for Business Server 2015

Enables new or newly-updated services or server roles on a computer running Skype for Business Server 2015.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Enable-CsComputer [-GlobalCatalog <Fqdn>] [-Report <String>] [-Force] [-WhatIf] [-Confirm]
 [-GlobalSettingsDomainController <Fqdn>] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Installing the required software does not automatically cause a computer to adopt a new service role; instead, that computer must be enabled before it actually begins to function in its new role.
The Enable-CsComputer cmdlet provides a way for administrators to enable newly updated services or server roles on the local computer.

Who can run this cmdlet: You must be a local administrator and a member of the domain in order to run the Enable-CsComputer cmdlet locally.

**Below Content Applies To:** Skype for Business Server 2015

Installing the required software does not automatically cause a computer to adopt a new service role; instead, that computer must be enabled before it actually begins to function in its new role.
The Enable-CsComputer cmdlet provides a way for administrators to enable newly updated services or server roles on the local computer.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Enable-CsComputer
```

The command shown in Example 1 activates any new Lync Server 2010 services or server roles that have been installed on the local computer.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 activates any new Lync Server services or server roles that have been installed on the local computer.

Enable-CsComputer

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 activates any new Skype for Business Server 2015 services or server roles that have been installed on the local computer.

Enable-CsComputer

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Enable-CsComputer -Verbose
```

The preceding command also activates any new Lync Server 2010 services or server roles that have been installed on the local computer.
In this case, however, the addition of the Verbose parameter ensures that a step-by-step account of the tasks being carried out by Enable-CsComputer will be reported on the screen.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

Example 2 also activates any new Lync Server services or server roles that have been installed on the local computer.
In this case, however, the addition of the Verbose parameter ensures that a step-by-step account of the tasks being carried out by Enable-CsComputer will be reported on the screen.

Enable-CsComputer -Verbose

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 also activates any new Skype for Business Server 2015 services or server roles that have been installed on the local computer.
In this case, however, the addition of the Verbose parameter ensures that a step-by-step account of the tasks being carried out by the Enable-CsComputer cmdlet will be reported on the screen.

Enable-CsComputer -Verbose

## PARAMETERS

### -GlobalCatalog
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Fully qualified domain name (FQDN) of a global catalog server in your domain.
This parameter is not required if you are running Enable-CsComputer on a computer with an account in your domain.



**Below Content Applies To:** Skype for Business Server 2015

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
For example: -Report "C:\Logs\EnableComputer.html"

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
**Below Content Applies To:** Lync Server 2010

{{Fill GlobalSettingsDomainController Description}}



**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

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

###  
None.
Enable-CsComputer does not accept pipelined input.

###  
None.
The Enable-CsComputer cmdlet does not accept pipelined input.

## OUTPUTS

###  
None.
Instead, Enable-CsComputer enables instances of the Microsoft.Rtc.Management.Deploy.Internal.Machine object.

###  
None.
Instead, the Enable-CsComputer cmdlet enables instances of the Microsoft.Rtc.Management.Deploy.Internal.Machine object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/ac014030-4cd0-4503-b70e-12ab5b0ec34b(OCS.14).aspx)

[Disable-CsComputer]()

[Get-CsComputer]()

[Test-CsComputer]()

[Online Version](http://technet.microsoft.com/EN-US/library/ac014030-4cd0-4503-b70e-12ab5b0ec34b(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/ac014030-4cd0-4503-b70e-12ab5b0ec34b(OCS.16).aspx)

