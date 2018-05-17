---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Enable-CsAdForest
schema: 2.0.0
---

# Enable-CsAdForest

## SYNOPSIS
Makes the Active Directory modifications required before you can install Skype for Business Server.
This includes making global changes to the Configuration or System containers; creating universal groups; and creating property sets and display specifiers that are specific to Skype for Business Server.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Enable-CsAdForest [-GroupDomain <Fqdn>] [-GroupDomainController <Fqdn>] [-GlobalCatalog <Fqdn>]
 [-GlobalSettingsDomainController <Fqdn>] [-RootDomainController <Fqdn>] [-Force] [-Report <String>] [-WhatIf]
 [-Confirm] [-SkipPrepareCheck <Boolean>] [<CommonParameters>]
```

## DESCRIPTION
Before you can install Skype for Business Server, you must make a number of forest-level changes to Active Directory Domain Services.
This includes creating display specifiers and objects specific to Skype for Business Server, creating the universal security groups that are needed to manage Skype for Business Server, and granting global settings object access rights to these groups.

Forest preparation is typically carried out through the Skype for Business Server Setup Wizard.
However, enterprise administrators can also perform forest preparation at any time by running the Enable-CsAdForest cmdlet.

After the Enable-CsAdForest cmdlet finishes running, you can use the Get-CsAdForest cmdlet to verify that the forest is ready for the next step in the installation process.

You must be an enterprise administrator in order to run the Enable-CsAdForest cmdlet locally.

Historical Note: This cmdlet carries out tasks similar to those carried out by the following Microsoft Office Communications Server 2007 R2 command:

`Lcscmd.exe /forest /action:ForestPrep`

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Enable-CsAdForest
```

This command prepares the Active Directory forest for the installation of Skype for Business Server.
Because the GroupDomain parameter is not used, the universal security groups generated when you run the Enable-CsAdForest cmdlet will be created in the local domain.

### -------------------------- Example 2 --------------------------
```
Enable-CsAdForest -GroupDomain northamerica.litwareinc.com
```

This command prepares the Active Directory forest for the installation of Skype for Business Server.
The GroupDomain parameter is used to ensure that the universal security groups created by running the Enable-CsAdForest cmdlet will be created in the northamerica.litwareinc.com domain.


## PARAMETERS

### -GroupDomain
Fully qualified domain name (FQDN) of the domain where the new universal security groups should be created.
If this parameter is not included, then the groups will be created in the local domain.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GlobalCatalog
FQDN of a global catalog server in your domain.
This parameter is not required if you are running the Enable-CsAdForest cmdlet on a computer with an account in your domain.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Report
Enables you to specify a file path for the log file created when the cmdlet runs.
For example: 

`-Report "C:\Logs\ForestPrep.html"`

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SkipPrepareCheck
When set to True ($True), causes Enable-CsAdForest to run without first doing its initial preparation checks.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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


## NOTES

## RELATED LINKS

