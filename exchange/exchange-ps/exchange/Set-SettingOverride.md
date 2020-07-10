---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/set-settingoverride
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
title: Set-SettingOverride
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchserver-ps-2013 || exchserver-ps-2016 || exchserver-ps-2019"
---

# Set-SettingOverride

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

**Caution**: Incorrect usage of the setting override cmdlets can cause serious damage to your Exchange organization. This damage could require you to reinstall Exchange. Only use these cmdlets as instructed by product documentation or under the direction of Microsoft Customer Service and Support.

Use the Set-SettingOverride cmdlet to modify setting overrides that store Exchange customizations in Active Directory instead of in text files on the server.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-SettingOverride [-Identity] <SettingOverrideIdParameter>
 [-Confirm]
 [-DomainController <Fqdn>]
 [-MaxVersion <Version>]
 [-MinVersion <Version>]
 [-Parameters <MultiValuedProperty>]
 [-Reason <String>]
 [-Server <String[]>]
 [-WhatIf]
 [-Force]
 [<CommonParameters>]
```

## DESCRIPTION
Setting overrides configure and store Exchange server customizations in Active Directory. The settings can be organization-wide or server-specific, and they persist in Active Directory across Exchange Cumulative Updates (CUs). Exchange customizations in web.config or exe.config XML application configuration files are server-specific, and they're lost when you install the next Exchange CU.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-SettingOverride -Identity "Change OAB Generation" -Server Mailbox01 -Component TimeBasedAssistants -Section OABGeneratorAssistant -Parameters @("WorkCycle=03:00:00")
```

This example modifies the setting override named Change OAB Generation on the server named Mailbox01 by changing the OAB generation interval to 3 hours.

## PARAMETERS

### -Identity
The Identity parameter specifies the setting override that you want to modify. You can use any value that uniquely identifies the override. For example:

- Name

- Distinguished name (DN)

- GUID

```yaml
Type: SettingOverrideIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
The Force switch specifies whether to suppress warning or confirmation messages. You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxVersion
The MaxVersion parameter specifies the latest version of Exchange 2016 that this override applies to (up to and including the specified value).

Valid input for this parameter is an Exchange 2016 version value in the format 15.1.xxx.xx. You can use values with leading zeros, but the leading zeros are removed from the results. For example, 15.01.0225.042 is stored as 15.1.225.42.

To remove a configured version value so the override applies to all versions of Exchange 2016, use the value $null.

```yaml
Type: Version
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MinVersion
The MinVersion parameter specifies the earliest version of Exchange 2016 that this override applies to (up to and including the specified value).

Valid input for this parameter is an Exchange 2016 version value in the format 15.1.xxx.xx. You can use values with leading zeros, but the leading zeros are removed from the results. For example, 15.01.0225.042 is stored as 15.1.225.42.

To remove a configured version value so the override applies to all versions of Exchange 2016, use the value $null.

```yaml
Type: Version
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Parameters
The Parameters parameter specifies one or more parameters for the override that are available for the combination of the Component and Section parameter values. This parameter uses the syntax @("\<parameter1\>=\<value1\>","\<parameter2\>=\<value2\>"...). For example:

- @("Enabled=true")

- @("IMServerName=\<SkypePoolFQDN\>","IMCertificateThumbprint=\<ThumbprintGUID\>")

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Reason
The Reason parameter is used to provide a description of why the override was created. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Server
The Server parameter specifies the name of the Exchange 2016 server where you want the override applied. You can specify a single Exchange 2016 server name, or an array of Exchange 2016 server name wildcards. For example, if you have three Exchange 2016 servers named Exchange01, Exchange02 and Exchange03, specify the value Exchange\* to apply the override to all of them.

To remove the specified server so the override applies to all Exchange 2016 servers in the Active Directory forest, use the value $null.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  

## OUTPUTS

###  

## NOTES

## RELATED LINKS
