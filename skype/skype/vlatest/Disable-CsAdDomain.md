---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Disable-CsAdDomain

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Undoes the domain preparation tasks carried out by the Enable-CsAdDomain cmdlet.
This cmdlet is typically used only if you are uninstalling Microsoft Lync Server 2010 from a domain.

**Below Content Applies To:** Lync Server 2013

Undoes the domain preparation tasks carried out by the Enable-CsAdDomain cmdlet.
This cmdlet is typically used only if you are uninstalling Lync Server from a domain.
This cmdlet was introduced in Lync Server 2010.

**Below Content Applies To:** Skype for Business Server 2015

Undoes the domain preparation tasks carried out by the Enable-CsAdDomain cmdlet.
This cmdlet is typically used only if you are uninstalling Skype for Business Server 2015 from a domain.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Disable-CsAdDomain [-Domain <Fqdn>] [-DomainController <Fqdn>] [-GlobalCatalog <Fqdn>]
 [-GlobalSettingsDomainController <Fqdn>] [-Force] [-Report <String>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

When you install Lync Server 2010 in a domain, that domain must be correctly prepared, a process that includes extending the Active Directory schema to allow for the addition of attributes specific to Lync Server as well as assigning the required Access Control Entries to the universal groups needed for managing and operating Lync Server.
If you later decide to uninstall Lync Server (or if you encounter problems during the setup process), you might need to roll back these domain-level changes.
The Disable-CsAdDomain cmdlet provides a way for you to undo all the domain-level modifications made by the Enable-CsAdDomain cmdlet.

Note that the tasks carried out by Disable-CsAdDomain are similar to the tasks carried out by the following Microsoft Office Communications Server 2007 R2 command:

Lcscmd.exe /domain /action:DomainUnprep

Who can run this cmdlet: You must be a domain administrator in order to run the Disable-CsAdDomain cmdlet locally.

**Below Content Applies To:** Lync Server 2013

When you install Lync Server in a domain, that domain must be correctly prepared, a process that includes extending the Active Directory schema to allow for the addition of attributes specific to Lync Server as well as assigning the required Access Control Entries to the universal groups needed for managing and operating Lync Server.
If you later decide to uninstall Lync Server (or if you encounter problems during the setup process), you might need to roll back these domain-level changes.
The Disable-CsAdDomain cmdlet provides a way for you to undo all the domain-level modifications made by the Enable-CsAdDomain cmdlet.

Note that the tasks carried out by Disable-CsAdDomain are similar to the tasks carried out by the following Microsoft Office Communications Server 2007 R2 command:

Lcscmd.exe /domain /action:DomainUnprep

Who can run this cmdlet: You must be a domain administrator in order to run the Disable-CsAdDomain cmdlet locally.

**Below Content Applies To:** Skype for Business Server 2015

When you install Skype for Business Server 2015 in a domain, that domain must be correctly prepared, a process that includes extending the Active Directory schema to allow for the addition of attributes specific to Skype for Business Server 2015 as well as assigning the required Access Control Entries to the universal groups needed for managing and operating Skype for Business Server 2015.
If you later decide to uninstall Skype for Business Server 2015 (or if you encounter problems during the setup process), you might need to roll back these domain-level changes.
The Disable-CsAdDomain cmdlet provides a way for you to undo all the domain-level modifications made by the Enable-CsAdDomain cmdlet.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Disable-CsAdDomain
```

The preceding command rolls back the domain preparation process in the local domain.
Because the Force parameter is not included, the command will fail if Disable-CsAdDomain determines that at least one Front End Server, A/V Conferencing Server, or Web Services server is still active in the domain.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 rolls back the domain preparation process in the local domain.
Because the Force parameter is not included, the command will fail if Disable-CsAdDomain determines that at least one Front End Server, A/V Conferencing Server, or Web Services server is still active in the domain.

Disable-CsAdDomain

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 rolls back the domain preparation process in the local domain.
Because the Force parameter is not included, the command will fail if the Disable-CsAdDomain cmdlet determines that at least one Front End Server, A/V Conferencing Server, or Web Services server is still active in the domain.

Disable-CsAdDomain

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Disable-CsAdDomain -Domain asia.litwareinc.com
```

The preceding command rolls back the domain preparation process for the domain asia.litwareinc.com.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

Example 2 rolls back the domain preparation process for the domain asia.litwareinc.com.

Disable-CsAdDomain -Domain asia.litwareinc.com

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 rolls back the domain preparation process for the domain asia.litwareinc.com.

Disable-CsAdDomain -Domain asia.litwareinc.com

### -------------------------- Example 3 ------------------------ (Lync Server 2010)
```
Disable-CsAdDomain -Force
```

The command shown in Example 3 uses the Force parameter to force the rollback of the domain preparation process in the local domain.
This means that rollback will occur even if Disable-CsAdDomain determines that at least one Front End Server, A/V Conferencing Server, or Web Services server is still active in the domain.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 3 uses the Force parameter to force the rollback of the domain preparation process in the local domain.
This means that rollback will occur even if Disable-CsAdDomain determines that at least one Front End Server, A/V Conferencing Server, or Web Services server is still active in the domain.

Disable-CsAdDomain -Force

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 3 uses the Force parameter to force the rollback of the domain preparation process in the local domain.
This means that rollback will occur even if the Disable-CsAdDomain cmdlet determines that at least one Front End Server, A/V Conferencing Server, or Web Services server is still active in the domain.

Disable-CsAdDomain -Force

## PARAMETERS

### -Domain
Fully qualified domain name (FQDN) of the domain where domain preparation should be rolled back (for example, -Domain asia.litwareinc.com).
If this parameter is not included, rollback will take place on the local domain.

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

### -DomainController
Enables administrators to specify the FQDN of the domain controller to be used when running Disable-CsAdDomain.
If not specified, the cmdlet will use the first available domain controller.

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

### -GlobalCatalog
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

FQDN of a global catalog server in your domain.
This parameter is not required if you are running Disable-CsAdDomain on a computer with an account in your domain.



**Below Content Applies To:** Skype for Business Server 2015

FQDN of a global catalog server in your domain.
This parameter is not required if you are running the Disable-CsAdDomain cmdlet on a computer with an account in your domain.



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

### -GlobalSettingsDomainController
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

FQDN of a domain controller where global settings are stored.
If global settings are stored in the System container in Active Directory Domain Services (AD DS) this parameter must point to the root domain controller.
If global settings are stored in the Configuration container, then any domain controller can be used and this parameter can be omitted.



**Below Content Applies To:** Skype for Business Server 2015

FQDN of a domain controller where global settings are stored.
If global settings are stored in the System container in Active Directory Domain Services this parameter must point to the root domain controller.
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

### -Force
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

If present rollback will occur even if Disable-CsAdDomain determines that at least one Front End, conferencing, or Web Services server is still active in the domain.
If not present then the command will fail if a Front End, Conferencing, or Web Services server is still active in the domain.



**Below Content Applies To:** Skype for Business Server 2015

If present rollback will occur even if the Disable-CsAdDomain cmdlet determines that at least one Front End, conferencing, or Web Services server is still active in the domain.
If not present then the command will fail if a Front End, Conferencing, or Web Services server is still active in the domain.



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

### -Report
Enables you to specify a file path for the log file created when the cmdlet runs.
For example: -Report "C:\Logs\DisableDomain.html"

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.
Disable-CsAdDomain does not accept pipelined input.

###  
None.
The Disable-CsAdDomain cmdlet does not accept pipelined input.

## OUTPUTS

###  
None.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/98a4982c-7d8d-460d-bff9-243373b20290(OCS.14).aspx)

[Enable-CsAdDomain]()

[Get-CsAdDomain]()

[Online Version](http://technet.microsoft.com/EN-US/library/98a4982c-7d8d-460d-bff9-243373b20290(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/98a4982c-7d8d-460d-bff9-243373b20290(OCS.16).aspx)

