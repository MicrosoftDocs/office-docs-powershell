---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Disable-CsAdForest

## SYNOPSIS
Undoes the forest preparation tasks carried out by the Enable-CsAdForest cmdlet.
This cmdlet is typically used only if you are uninstalling Skype for Business Server 2015.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Disable-CsAdForest [-GroupDomain <Fqdn>] [-GroupDomainController <Fqdn>] [-GlobalCatalog <Fqdn>]
 [-GlobalSettingsDomainController <Fqdn>] [-RootDomainController <Fqdn>] [-Report <String>] [-Force] [-WhatIf]
 [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
When you install Skype for Business Server, you make a number of forest-level changes to Active Directory Domain Services.
These changes (which can be carried out by using the Enable-CsAdForest cmdlet) include creating objects and display specifiers that are specific to Skype for Business Server 2015, creating universal security groups needed to manage Skype for Business Server, and granting global settings object access administrative rights and permissions to these groups.

If you later decide to uninstall Skype for Business Server (or if you encounter issues during the setup process) you might need to roll back these forest-level changes.
The Disable-CsAdForest cmdlet provides a way for you to undo all the forest-level modifications made by the Enable-CsAdForest cmdlet.

You must be an enterprise administrator in order to run the Disable-CsAdForest cmdlet locally.

Historical Note: The tasks carried out by Disable-CsAdForest are similar to the tasks carried out by the following Microsoft Office Communications Server 2007 R2 command: `Lcscmd.exe /forest /action:ForestUnprep`


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Disable-CsAdForest
```

The command shown in Example 1 rolls back the forest preparation tasks carried out by the Enable-CsAdForest cmdlet.
Because the Force parameter is not included, the command will fail if the Disable-CsAdForest cmdlet detects that at least one of the domains in the forest is still prepared for Skype for Business Server.
In that case, you will need to rolls back the domain preparation by running the Disable-CsAdDomain cmdlet.

### -------------------------- Example 2 --------------------------
```
Disable-CsAdForest -Force
```

In Example 2, forest preparation is rolled back even if the Disable-CsAdForest cmdlet detects that at least one of the domains in the forest is still prepared for Skype for Business Server.
Rollback is forced by including the Force parameter.


## PARAMETERS

### -GroupDomain
Fully qualified domain name (FQDN) of the domain where the Skype for Business Server universal groups were created (for example, -GroupDomain asia.litwareinc.com).
If this parameter is not included, the Disable-CsAdForest cmdlet will look for the universal groups in the local domain.

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
FQDN of a global catalog server in your domain.
This parameter is not required if you are running the Disable-CsComputer cmdlet on a computer with an account in your domain.

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
If global settings are stored in the System container in Active Directory Domain Services, then this parameter must point to the root domain controller.
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

### -Report
Enables you to specify a file path for the log file created when the cmdlet runs.
For example: 

`-Report "C:\Logs\DisableForest.html"`

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
If present, forces the rollback of the forest preparation steps even if the Disable-CsAdForest cmdlet detects that at least one of the domains in the forest is still prepared for Skype for Business Server.
If not present, the command will fail if the Disable-CsAdForest cmdlet detects that at least one of the domains in the forest is still prepared for.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).


## INPUTS

### None

## OUTPUTS

### None


## NOTES


## RELATED LINKS