---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
applicable: Exchange Server 2013, Exchange Server 2016
title: New-SettingOverride
schema: 2.0.0
monikerRange: "exchserver-ps-2013 || exchserver-ps-2016"
---

# New-SettingOverride

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the New-SettingsOverride cmdlet to create setting overrides that store Exchange 2016 customizations in Active Directory instead of in text files on the server.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
New-SettingOverride [-Name] <String> -Component <String> -Parameters <MultiValuedProperty> -Reason <String>
 -Section <String> [-Confirm] [-DomainController <Fqdn>] [-FixVersion <Version>] [-Force]
 [-MaxVersion <Version>] [-MinVersion <Version>] [-Server <String[]>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
You use setting overrides to configure and store Exchange 2016 server customizations in Active Directory. In previous versions of Exchange, these customizations were stored in web.config or exe.config XML application configuration files. The customizations in these files were lost when you installed the next Exchange Cumulative Update (CU) or Service Pack (SP). The customizations that are associated with the \*-SettingOverride cmdlets persist in Active Directory across Exchange 2016 CUs and SPs.

Incorrect usage of the \*-SettingOverride cmdlets can cause serious damage to your Exchange organization. This damage could require you to reinstall Exchange. Only use these cmdlets as instructed by product documentation or under the direction of Microsoft Customer Service and Support.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
New-SettingOverride -Name "IM Override" -Component OwaServer -Section IMSettings -Parameters @("IMServerName=skype01.contoso.com","IMCertificateThumbprint=CDF34A740E9D225A1A06193A9D44B2CE22775308") -Reason "Configure IM"
```

This example creates a new setting override named IM Server Integration. This override specifies the Skype for Business Server 2015 pool and a certificate thumbprint that allows instant messaging (IM) integration between Outlook on the web and Skype for Business. Because the Server parameter isn't used, the override applies to all Exchange 2016 servers in the Active Directory forest.

For more information, see the topic Configure instant messaging integration with Outlook on the web in Exchange 2016.

### -------------------------- Example 2 --------------------------
```
New-SettingOverride -Name "Change OAB Generation" -Server Mailbox01 -Component TimeBasedAssistants -Section OABGeneratorAssistant -Parameters @("WorkCycle=02:00:00") -Reason "Generate OAB Every 2 hours"
```

This example creates a new setting override named Change OAB Generation. This override specifies a 2 hour OAB generation interval. Because the Server parameter is used, the override applies only to the specified server named Mailbox01.

For more information, see the topic Change the offline address book generation schedule (https://technet.microsoft.com/library/bb124719.aspx).

## PARAMETERS

### -Component
The Component parameter specifies the component that the setting override is applied to. For example:

- TimeBasedAssistants

- OwaServer

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
The Name parameter specifies the unique name of the setting override. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Parameters
The Parameters parameter specifies one or more parameters for the override that are available for the combination of the Component and Section parameter values. This parameter uses the syntax @("\<parameter1\>=\<value1\>","\<parameter2\>=\<value2\>"...).

For example:

- @("Enabled=true")

- @("IMServerName=\<SkypePoolFQDN\>","IMCertificateThumbprint=\<ThumbprintGUID\>")

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Reason
The Reason parameter specifies why you are creating the setting override. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Section
The Section parameter specifies the name of the section for which the override is created. The available values for this parameter depend on the value of the Component parameter.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: True
Position: Named
Default value: None
Accept pipeline input: False
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
Applicable: Exchange Server 2013, Exchange Server 2016
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
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FixVersion
This parameter is reserved for internal Microsoft use.

```yaml
Type: Version
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
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
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxVersion
The MaxVersion parameter specifies the latest version of Exchange 2016 that this override applies to (up to and including the specified value).

Valid input for this parameter is an Exchange 2016 version value in the format 15.1.xxx.xx. You can use values with leading zeros, but the leading zeros are removed from the results. For example, 15.01.0225.042 is stored as 15.1.225.42.

The default value is blank ($null), which means the override applies to all versions of Exchange 2016.

```yaml
Type: Version
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MinVersion
The MinVersion parameter specifies the earliest version of Exchange 2016 that this override applies to (up to and including the specified value).

Valid input for this parameter is an Exchange 2016 version value in the format 15.1.xxx.xx. You can use values with leading zeros, but the leading zeros are removed from the results. For example, 15.01.0225.042 is stored as 15.1.225.42.

The default value is blank ($null), which means the override applies to all versions of Exchange 2016.

```yaml
Type: Version
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Server
The Server parameter specifies the name of the Exchange 2016 server where you want the override applied. You can specify a single Exchange 2016 server name, or an array of Exchange 2016 server name wildcards. For example, if you have three Exchange 2016 servers named Exchange01, Exchange02 and Exchange03, specify the value Exchange\* to apply the override to all of them.

If you don't use this parameter to specify a server, the override applies to all Exchange 2016 servers in the Active Directory forest.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
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
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/29be9ee9-d9c7-4aef-b068-8ab44ceecd0a.aspx)
