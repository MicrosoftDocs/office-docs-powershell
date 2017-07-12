---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Enable-CsAdDomain

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Modifies the security settings on the universal groups created during forest preparation.
These modifications provide the permissions needed to host and manage users enabled for Microsoft Lync Server 2010 within the domain.

**Below Content Applies To:** Lync Server 2013

Modifies the security settings on the universal groups created during forest preparation.
These modifications provide the permissions needed to host and manage users enabled for Lync Server within the domain.
This cmdlet was introduced in Lync Server 2010.

**Below Content Applies To:** Skype for Business Server 2015

Modifies the security settings on the universal groups created during forest preparation.
These modifications provide the permissions needed to host and manage users enabled for Skype for Business Server 2015 within the domain.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Enable-CsAdDomain [-Domain <Fqdn>] [-DomainController <Fqdn>] [-SkipPrepareCheck <Boolean>] [-CrossForest]
 [-GlobalCatalog <Fqdn>] [-GlobalSettingsDomainController <Fqdn>] [-Force] [-Report <String>] [-WhatIf]
 [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

Before you can install Lync Server 2010 in a domain, that domain must be correctly prepared, a process that includes extending the Active Directory schema to allow for the addition of attributes specific to Lync Server as well as assigning the required Access Control Entries to the universal groups needed for managing and operating Lync Server.
Domain preparation is typically carried out through the Lync Server 2010 Setup Wizard.
However, administrators can also perform domain preparation by running the Enable-CsAdDomain cmdlet.

After Enable-CsAdDomain finishes running, you can use the Get-CsAdDomain cmdlet to verify that the domain is ready for the next step in the installation process.

This cmdlet carries out tasks similar to those carried out by the following Microsoft Office Communications Server 2007 R2 command:

Lcscmd.exe /domain /action:DomainPrep

Who can run this cmdlet: You must be a domain administrator in order to run the Enable-CsAdDomain cmdlet locally.

**Below Content Applies To:** Lync Server 2013

Before you can install Lync Server in a domain, that domain must be correctly prepared, a process that includes extending the Active Directory schema to allow for the addition of attributes specific to Lync Server as well as assigning the required Access Control Entries to the universal groups needed for managing and operating Lync Server.
Domain preparation is typically carried out through the Lync Server Setup Wizard.
However, administrators can also perform domain preparation by running the Enable-CsAdDomain cmdlet.

After Enable-CsAdDomain finishes running, you can use the Get-CsAdDomain cmdlet to verify that the domain is ready for the next step in the installation process.

If you receive the following error, "Cannot find the object 'CrossRef' in Active Directory" while running tasks to prepare a child domain of a single-forest environment with multiple domains, you may have to manually add the RTCComponentUniversalServices group from the parent domain to the Windows Authorization Access group in the child domain.

This cmdlet carries out tasks similar to those carried out by the following Microsoft Office Communications Server 2007 R2 command:

Lcscmd.exe /domain /action:DomainPrep

Who can run this cmdlet: You must be a domain administrator in order to run the Enable-CsAdDomain cmdlet locally.

**Below Content Applies To:** Skype for Business Server 2015

Before you can install Skype for Business Server 2015 in a domain, that domain must be correctly prepared, a process that includes extending the Active Directory schema to allow for the addition of attributes specific to Skype for Business Server 2015 as well as assigning the required Access Control Entries to the universal groups needed for managing and operating Skype for Business Server 2015.
Domain preparation is typically carried out through the Skype for Business Server 2015 Setup Wizard.
However, administrators can also perform domain preparation by running the Enable-CsAdDomain cmdlet.

After the Enable-CsAdDomain cmdlet finishes running, you can use the Get-CsAdDomain cmdlet to verify that the domain is ready for the next step in the installation process.

If you receive the following error, "Cannot find the object 'CrossRef' in Active Directory" while running tasks to prepare a child domain of a single-forest environment with multiple domains, you may have to manually add the RTCComponentUniversalServices group from the parent domain to the Windows Authorization Access group in the child domain.

This cmdlet carries out tasks similar to those carried out by the following Microsoft Office Communications Server 2007 R2 command:

Lcscmd.exe /domain /action:DomainPrep



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Enable-CsAdDomain
```

The command shown in Example 1 prepares the local domain for the installation of Lync Server.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 prepares the local domain for the installation of Lync Server.

Enable-CsAdDomain

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 prepares the local domain for the installation of Skype for Business Server 2015.

Enable-CsAdDomain

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Enable-CsAdDomain -Domain asia.litwareinc.com
```

The preceding command prepares the domain asia.litwareinc.com for the installation of Lync Server.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

Example 2 prepares the domain asia.litwareinc.com for the installation of Lync Server.

Enable-CsAdDomain -Domain asia.litwareinc.com

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 prepares the domain asia.litwareinc.com for the installation of Skype for Business Server 2015.

Enable-CsAdDomain -Domain asia.litwareinc.com

## PARAMETERS

### -Domain
Fully qualified domain name (FQDN) of the domain where domain preparation is to take place (for example, -Domain asia.litwareinc.com).
If this parameter is not included, domain preparation will take place on the local domain.

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
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Enables administrators to specify the FQDN of the domain controller to be used when running Enable-CsAdDomain.
If not specified, the cmdlet will use the first available domain controller.



**Below Content Applies To:** Skype for Business Server 2015

Enables administrators to specify the FQDN of the domain controller to be used when running the Enable-CsAdDomain cmdlet.
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

### -SkipPrepareCheck
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

If set to True ($True), then Enable-CsAdDomain will skip its initial preparation check.



**Below Content Applies To:** Skype for Business Server 2015

If set to True ($True), then the Enable-CsAdDomain cmdlet will skip its initial preparation check.



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CrossForest
If present, indicates that domain preparation is taking place in a domain in a different forest.
This parameter is not required if the domain being enabled is in the same forest as the computer where the command is being run.

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

### -GlobalCatalog
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

FQDN of a global catalog server in your domain.
This parameter is not required if you are running Enable-CsAdDomain on a computer with an account in your domain.



**Below Content Applies To:** Skype for Business Server 2015

FQDN of a global catalog server in your domain.
This parameter is not required if you are running the Enable-CsAdDomain cmdlet on a computer with an account in your domain.



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
If global settings are stored in the System container in Active Directory Domain Services (AD DS), then this parameter must point to the root domain controller.
If global settings are stored in the Configuration container then any domain controller can be used and this parameter can be omitted.



**Below Content Applies To:** Skype for Business Server 2015

FQDN of a domain controller where global settings are stored.
If global settings are stored in the System container in Active Directory Domain Services, then this parameter must point to the root domain controller.
If global settings are stored in the Configuration container then any domain controller can be used and this parameter can be omitted.



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
Suppresses the display of any non-fatal error message that might arise when running the command.

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
For example: -Report "C:\Logs\DomainPrep.html"

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
Enable-CsAdDomain does not accept pipelined input.

###  
None.
The Enable-CsAdDomain cmdlet does not accept pipelined input.

## OUTPUTS

###  
None.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/a39768de-51ae-45e8-b6b7-441b5da0b3b2(OCS.14).aspx)

[Disable-CsAdDomain]()

[Get-CsAdDomain]()

[Online Version](http://technet.microsoft.com/EN-US/library/a39768de-51ae-45e8-b6b7-441b5da0b3b2(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/a39768de-51ae-45e8-b6b7-441b5da0b3b2(OCS.16).aspx)

