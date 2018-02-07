---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
schema: 2.0.0
---

# Set-ExchangeServer

## SYNOPSIS
!!! Exchange Server 2010

Use the Set-ExchangeServer cmdlet to set Exchange attributes in Active Directory for a specified server.

!!! Exchange Server 2013, Exchange Server 2016

This cmdlet is available only in on-premises Exchange.

Use the Set-ExchangeServer cmdlet to set Exchange attributes in Active Directory for a specified server.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Set-ExchangeServer [-Identity] <ServerIdParameter> [-Confirm] [-CustomerFeedbackEnabled <$true | $false>]
 [-DomainController <Fqdn>] [-ErrorReportingEnabled <$true | $false>] [-InternetWebProxy <Uri>]
 [-ProductKey <ProductKey>] [-StaticConfigDomainController <String>]
 [-StaticDomainControllers <MultiValuedProperty>] [-StaticExcludedDomainControllers <MultiValuedProperty>]
 [-StaticGlobalCatalogs <MultiValuedProperty>] [-WhatIf]
 [-MailboxProvisioningAttributes <MailboxProvisioningAttributes>] [-MonitoringGroup <String>]
 [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

The Set-ExchangeServer cmdlet sets generic Exchange attributes in Active Directory for a specified computer. You can only use this task on one server at a time. If you want to bulk manage your servers running Microsoft Exchange, add this task to a script.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Shell infrastructure permissions" section in the Exchange and Shell Infrastructure Permissions topic.

!!! Exchange Server 2013

The Set-ExchangeServer cmdlet sets generic Exchange attributes in Active Directory for a specified computer. You can only use this task on one server at a time. If you want to bulk manage your servers running Microsoft Exchange, add this task to a script.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Shell infrastructure permissions" section in the Exchange and Shell infrastructure permissions topic.

!!! Exchange Server 2016

The Set-ExchangeServer cmdlet sets generic Exchange attributes in Active Directory for a specified computer. You can only use this task on one server at a time. If you want to bulk manage your servers running Microsoft Exchange, add this task to a script.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Set-ExchangeServer -Identity TestServer.Contoso.com -ErrorReportingEnabled: $false
```

This example disables error reporting on the specified server.

### Example 1 -------------------------- (Exchange Server 2013)
```
Set-ExchangeServer -Identity TestServer.Contoso.com -ErrorReportingEnabled: $false
```

This example disables error reporting on the specified server.

### Example 1 -------------------------- (Exchange Server 2016)
```
Set-ExchangeServer -Identity TestServer.Contoso.com -ErrorReportingEnabled $false
```

This example disables error reporting on the specified server.

### Example 2 -------------------------- (Exchange Server 2010)
```
Set-ExchangeServer -Identity 'SERVER01' -CustomerFeedbackEnabled $true
```

This example enrolls an Exchange server into the Customer Experience Improvement Program. In this example, the server name is SERVER01.

### Example 2 -------------------------- (Exchange Server 2013)
```
Set-ExchangeServer -Identity 'SERVER01' -CustomerFeedbackEnabled $true
```

This example enrolls an Exchange server into the Customer Experience Improvement Program. In this example, the server name is SERVER01.

### Example 2 -------------------------- (Exchange Server 2016)
```
Set-ExchangeServer -Identity 'SERVER01' -CustomerFeedbackEnabled $true
```

This example enrolls an Exchange server into the Customer Experience Improvement Program. In this example, the server name is SERVER01.

### Example 3 -------------------------- (Exchange Server 2010)
```
Set-ExchangeServer -Identity 'SERVER01' -CustomerFeedbackEnabled $false
```

This example removes an Exchange server from the Customer Experience Improvement Program. In this example, the server name is SERVER01.

### Example 3 -------------------------- (Exchange Server 2013)
```
Set-ExchangeServer -Identity 'SERVER01' -CustomerFeedbackEnabled $false
```

This example removes an Exchange server from the Customer Experience Improvement Program. In this example, the server name is SERVER01.

### Example 3 -------------------------- (Exchange Server 2016)
```
Set-ExchangeServer -Identity 'SERVER01' -CustomerFeedbackEnabled $false
```

This example removes an Exchange server from the Customer Experience Improvement Program. In this example, the server name is SERVER01.

## PARAMETERS

### -Identity
The Identity parameter specifies the GUID, distinguished name (DN), or name of the server.

```yaml
Type: ServerIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

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
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomerFeedbackEnabled
!!! Exchange Server 2010

The CustomerFeedbackEnabled parameter specifies whether the Exchange server is enrolled in the Microsoft Customer Experience Improvement Program. For more information, see Opt-in or Opt-out of the Customer Experience Improvement Program.



!!! Exchange Server 2013, Exchange Server 2016

The CustomerFeedbackEnabled parameter specifies whether the Exchange server is enrolled in the Microsoft Customer Experience Improvement Program (CEIP). The CEIP collects anonymous information about how you use Exchange and problems that you might encounter. If you decide not to participate in the CEIP, the servers are opted-out automatically.



```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
!!! Exchange Server 2010

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.



!!! Exchange Server 2013, Exchange Server 2016

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

The DomainController parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data.



```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ErrorReportingEnabled
The ErrorReportingEnabled parameter specifies whether error reporting is enabled.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InternetWebProxy
!!! Exchange Server 2010

The InternetWebProxy parameter specifies which Web proxy servers, such as Microsoft Internet Security and Acceleration (ISA) Server computers, Exchange should use to reach the Internet.



!!! Exchange Server 2013, Exchange Server 2016

The InternetWebProxy parameter specifies which web proxy servers, such as computers running Forefront Threat Management Gateway, Exchange should use to reach the Internet.



```yaml
Type: Uri
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StaticExcludedDomainControllers
!!! Exchange Server 2010

The StaticExcludedDomainControllers parameter specifies whether to exclude a list of domain controllers to be used by the server.



!!! Exchange Server 2013, Exchange Server 2016

The StaticExcludedDomainControllers parameter specifies whether to exclude a list of domain controllers from being used by the server.



```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

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
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MailboxProvisioningAttributes
This parameter is reserved for internal Microsoft use.

```yaml
Type: MailboxProvisioningAttributes
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MonitoringGroup
!!! Exchange Server 2013

The MonitoringGroup parameter specifies how to add your Exchange 2013 servers to monitoring groups. You can add your servers to an existing group or create a monitoring group based on location or deployment, or to partition monitoring responsibility among your servers.



!!! Exchange Server 2016

The MonitoringGroup parameter specifies how to add your Exchange servers to monitoring groups. You can add your servers to an existing group or create a monitoring group based on location or deployment, or to partition monitoring responsibility among your servers.



```yaml
Type: String
Parameter Sets: (All)
Aliases:
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
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/8e8d3fca-59b3-4355-a637-28bf5e5ca4cf.aspx)

