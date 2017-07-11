---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Enable-CsAdForest

## SYNOPSIS
Below Content Applies To: Lync Server 2010

Makes the Active Directory modifications required before you can install Microsoft Lync Server 2010.
This includes making global changes to the Configuration or System containers; creating universal groups; and creating property sets and display specifiers that are specific to Lync Server 2010.

Below Content Applies To: Lync Server 2013

Makes the Active Directory modifications required before you can install Lync Server.
This includes making global changes to the Configuration or System containers; creating universal groups; and creating property sets and display specifiers that are specific to Lync Server.
This cmdlet was introduced in Lync Server 2010.

Below Content Applies To: Skype for Business Server 2015

Makes the Active Directory modifications required before you can install Skype for Business Server 2015.
This includes making global changes to the Configuration or System containers; creating universal groups; and creating property sets and display specifiers that are specific to Skype for Business Server 2015.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Enable-CsAdForest [-GroupDomain <Fqdn>] [-GroupDomainController <Fqdn>] [-GlobalCatalog <Fqdn>]
 [-GlobalSettingsDomainController <Fqdn>] [-RootDomainController <Fqdn>] [-Force] [-Report <String>] [-WhatIf]
 [-Confirm] [-SkipPrepareCheck <Boolean>] [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2010

Before you can install Lync Server 2010, you must make a number of forest-level changes to Active Directory Domain Services (AD DS).
This includes creating display specifiers and objects specific to Lync Server 2010, creating the universal security groups that are needed to manage Lync Server 2010, and granting global settings object access permissions to these groups.
Forest preparation is typically carried out through the Lync Server 2010 Setup Wizard.
However, enterprise administrators can also perform forest preparation at any time by running the Enable-CsAdForest cmdlet.

After Enable-CsAdForest finishes running, you can use the Get-CsAdForest cmdlet to verify that the forest is ready for the next step in the installation process.

Note that this cmdlet carries out tasks similar to those carried out by the following Microsoft Office Communications Server 2007 R2 command:

Lcscmd.exe /forest /action:ForestPrep

Who can run this cmdlet: You must be an enterprise administrator in order to run the Enable-CsAdForest cmdlet locally.

Below Content Applies To: Lync Server 2013

Before you can install Lync Server, you must make a number of forest-level changes to Active Directory Domain Services (AD DS).
This includes creating display specifiers and objects specific to Lync Server, creating the universal security groups that are needed to manage Lync Server, and granting global settings object access rights to these groups.
Forest preparation is typically carried out through the Lync Server Setup Wizard.
However, enterprise administrators can also perform forest preparation at any time by running the Enable-CsAdForest cmdlet.

After Enable-CsAdForest finishes running, you can use the Get-CsAdForest cmdlet to verify that the forest is ready for the next step in the installation process.

Note that this cmdlet carries out tasks similar to those carried out by the following Microsoft Office Communications Server 2007 R2 command:

Lcscmd.exe /forest /action:ForestPrep

Who can run this cmdlet: You must be an enterprise administrator in order to run the Enable-CsAdForest cmdlet locally.

Below Content Applies To: Skype for Business Server 2015

Before you can install Skype for Business Server 2015, you must make a number of forest-level changes to Active Directory Domain Services.
This includes creating display specifiers and objects specific to Skype for Business Server 2015, creating the universal security groups that are needed to manage Skype for Business Server 2015, and granting global settings object access rights to these groups.
Forest preparation is typically carried out through the Skype for Business Server 2015 Setup Wizard.
However, enterprise administrators can also perform forest preparation at any time by running the Enable-CsAdForest cmdlet.

After the Enable-CsAdForest cmdlet finishes running, you can use the Get-CsAdForest cmdlet to verify that the forest is ready for the next step in the installation process.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Enable-CsAdForest
```

This command prepares the Active Directory forest for the installation of Lync Server 2010.
Because the GroupDomain parameter is not used, the universal security groups generated when you run Enable-CsAdForest will be created in the local domain.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

This command prepares the Active Directory forest for the installation of Lync Server.
Because the GroupDomain parameter is not used, the universal security groups generated when you run Enable-CsAdForest will be created in the local domain.

Enable-CsAdForest

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

This command prepares the Active Directory forest for the installation of Skype for Business Server 2015.
Because the GroupDomain parameter is not used, the universal security groups generated when you run the Enable-CsAdForest cmdlet will be created in the local domain.

Enable-CsAdForest

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Enable-CsAdForest -GroupDomain northamerica.litwareinc.com
```

This command prepares the Active Directory forest for the installation of Lync Server 2010.
The GroupDomain parameter is used to ensure that the universal security groups created by running Enable-CsAdForest will be created in the northamerica.litwareinc.com domain.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

This command prepares the Active Directory forest for the installation of Lync Server.
The GroupDomain parameter is used to ensure that the universal security groups created by running Enable-CsAdForest will be created in the northamerica.litwareinc.com domain.

Enable-CsAdForest -GroupDomain northamerica.litwareinc.com

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

This command prepares the Active Directory forest for the installation of Skype for Business Server 2015.
The GroupDomain parameter is used to ensure that the universal security groups created by running the Enable-CsAdForest cmdlet will be created in the northamerica.litwareinc.com domain.

Enable-CsAdForest -GroupDomain northamerica.litwareinc.com

## PARAMETERS

### -GroupDomain
Fully qualified domain name (FQDN) of the domain where the new universal security groups should be created.
If this parameter is not included, then the groups will be created in the local domain.

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

### -GroupDomainController
FQDN of a domain controller where universal group information is stored.

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
Below Content Applies To: Lync Server 2010, Lync Server 2013

FQDN of a global catalog server in your domain.
This parameter is not required if you are running Enable-CsAdForest on a computer with an account in your domain.



Below Content Applies To: Skype for Business Server 2015

FQDN of a global catalog server in your domain.
This parameter is not required if you are running the Enable-CsAdForest cmdlet on a computer with an account in your domain.



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

### -RootDomainController
FQDN of the root domain controller, used to create trust paths for clients that need to access resources in domains other than their own.

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

### -Report
Enables you to specify a file path for the log file created when the cmdlet runs.
For example: -Report "C:\Logs\ForestPrep.html"

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

### -SkipPrepareCheck
Below Content Applies To: Lync Server 2010

{{Fill SkipPrepareCheck Description}}



Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

When set to True ($True), causes Enable-CsAdForest to run without first doing its initial preparation checks.



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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.

## OUTPUTS

###  
None.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/2381fca7-294b-486d-919d-e8626cef6fea(OCS.14).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/2381fca7-294b-486d-919d-e8626cef6fea(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/2381fca7-294b-486d-919d-e8626cef6fea(OCS.16).aspx)

