---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/set-exchangeserver
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
title: Set-ExchangeServer
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Set-ExchangeServer

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Set-ExchangeServer cmdlet to set Exchange attributes in Active Directory for a specified server.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-ExchangeServer [-Identity] <ServerIdParameter>
 [-Confirm]
 [-CustomerFeedbackEnabled <Boolean>]
 [-DataCollectionEnabled <Boolean>]
 [-DomainController <Fqdn>]
 [-ErrorReportingEnabled <Boolean>]
 [-InternetWebProxy <Uri>]
 [-InternetWebProxyBypassList <MultiValuedProperty>]
 [-MitigationsApplied <MultiValuedProperty>]
 [-MitigationsBlocked <MultiValuedProperty>]
 [-MitigationsEnabled <Boolean>]
 [-MonitoringGroup <String>]
 [-ProductKey <ProductKey>]
 [-RingLevel <String>]
 [-StaticConfigDomainController <String>]
 [-StaticDomainControllers <MultiValuedProperty>]
 [-StaticExcludedDomainControllers <MultiValuedProperty>]
 [-StaticGlobalCatalogs <MultiValuedProperty>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The Set-ExchangeServer cmdlet sets generic Exchange attributes in Active Directory for a specified computer. You can only use this task on one server at a time. If you want to bulk manage your servers running Microsoft Exchange, add this task to a script.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-ExchangeServer -Identity TestServer.Contoso.com -ErrorReportingEnabled $false
```

This example disables error reporting on the specified server.

### Example 2
```powershell
Set-ExchangeServer -Identity 'SERVER01' -CustomerFeedbackEnabled $true
```

This example enrolls an Exchange server into the Customer Experience Improvement Program. In this example, the server name is SERVER01.

### Example 3
```powershell
Set-ExchangeServer -Identity 'SERVER01' -CustomerFeedbackEnabled $false
```

This example removes an Exchange server from the Customer Experience Improvement Program. In this example, the server name is SERVER01.

## PARAMETERS

### -Identity
The Identity parameter specifies the Exchange server that you want to modify. You can use any value that uniquely identifies the server. For example:

- Name
- FQDN
- Distinguished name (DN)
- Exchange Legacy DN

```yaml
Type: ServerIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomerFeedbackEnabled
The CustomerFeedbackEnabled parameter specifies whether the Exchange server is enrolled in the Microsoft Customer Experience Improvement Program (CEIP). The CEIP collects anonymous information about how you use Exchange and problems that you might encounter. If you decide not to participate in the CEIP, the servers are opted-out automatically.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DataCollectionEnabled
The DataCollectionEnabled parameter specifies whether the EM Service will collect and send diagnostic data to Microsoft using OCS. Valid values are:

- $true: The EM Service collects and sends diagnostic data to Microsoft using OCS.
- $false: Data collection is disabled.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

The DomainController parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ErrorReportingEnabled
The ErrorReportingEnabled parameter specifies whether error reporting is enabled.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InternetWebProxy
The InternetWebProxy parameter specifies the web proxy server that the Exchange server uses to reach the internet. A valid value for this parameter is the URL of the web proxy server.

In Exchange 2016 or later, to configure a list of servers that bypass the web proxy server and connect to the internet directly, use the InternetWebProxyBypassList parameter.

```yaml
Type: Uri
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InternetWebProxyBypassList
The InternetWebProxyBypassList parameter specifies a list of servers that bypass the web proxy server specified by the InternetWebProxy parameter. You identify the servers by their FQDN (for example, server01.contoso.com).

To enter multiple values and overwrite any existing FQDN entries, use the following syntax: @("host1.contoso.com","host2.contoso.com","host3.contoso.com").

The maximum number of servers you can enter with this parameter is 100.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MitigationsApplied
Do not use this parameter. The EM service uses this parameter to store and track mitigation status.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MitigationsBlocked
The MitigationsBlocked parameter specifies a list of mitigations that are blocked. The Mitigation IDs present in this list are not applied by EM service in its hourly run.

To enter multiple values and overwrite any existing Mitigation entries, use the following syntax: `@("Entry1","Entry2",..."EntryN")`.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MitigationsEnabled
The MitigationsEnabled parameter specifies whether the Exchange Emergency Mitigation service (EM service) automatically applies mitigations on the Exchange server. Valid values are:

- $true: The EM Service automatically applies mitigations on the Exchange server.
- $false: Mitigations are not automatically applied on the Exchange server.

For more information, see [Exchange Emergency Mitigation (EM) service](https://learn.microsoft.com/exchange/exchange-emergency-mitigation-service).

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MonitoringGroup
The MonitoringGroup parameter specifies how to add your Exchange servers to monitoring groups. You can add your servers to an existing group or create a monitoring group based on location or deployment, or to partition monitoring responsibility among your servers.

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

### -ProductKey
The ProductKey parameter specifies the server product key.

```yaml
Type: ProductKey
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RingLevel
The RingLevel parameter specifies the server's ring level used by the Feature Flighting feature.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StaticConfigDomainController
The StaticConfigDomainController parameter specifies whether to configure a domain controller to be used by the server via Directory Service Access (DSAccess).

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StaticDomainControllers
The StaticDomainControllers parameter specifies whether to configure a list of domain controllers to be used by the server via DSAccess.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StaticExcludedDomainControllers
The StaticExcludedDomainControllers parameter specifies whether to exclude a list of domain controllers from being used by the server.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StaticGlobalCatalogs
The StaticGlobalCatalogs parameter specifies whether to configure a list of global catalogs to be used by the server via DSAccess.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

### Input types
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
