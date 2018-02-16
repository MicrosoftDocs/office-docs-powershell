---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
schema: 2.0.0
---

# Set-ClientAccessServer

## SYNOPSIS
!!! Exchange Server 2010

Use the Set-ClientAccessServer cmdlet to set properties on specified Client Access server objects.

!!! Exchange Server 2013

This cmdlet is available only in on-premises Exchange.

Use the Set-ClientAccessServer cmdlet to set properties on specified Client Access server objects.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

!!! Exchange Server 2016

This cmdlet is available only in on-premises Exchange.

Use the Set-ClientAccessServer cmdlet to modify the client access configuration settings on Mailbox servers.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set2
```
Set-ClientAccessServer [-Identity] <ClientAccessServerIdParameter>
 [-AlternateServiceAccountCredential <PSCredential[]>] [-CleanUpInvalidAlternateServiceAccountCredentials]
 [-Confirm] [-DomainController <Fqdn>] [-IrmLogEnabled <$true | $false>] [-IrmLogMaxAge <EnhancedTimeSpan>]
 [-IrmLogMaxDirectorySize <Unlimited>] [-IrmLogMaxFileSize <ByteQuantifiedSize>]
 [-IrmLogPath <LocalLongFullPath>] [-IsOutOfService <$true | $false>]
 [-RemoveAlternateServiceAccountCredentials] [-WhatIf] [<CommonParameters>]
```

### Set1
```
Set-ClientAccessServer [-Identity] <ClientAccessServerIdParameter> [-AutoDiscoverServiceInternalUri <Uri>]
 [-AutoDiscoverSiteScope <MultiValuedProperty>] [-Confirm] [-DomainController <Fqdn>]
 [-IrmLogEnabled <$true | $false>] [-IrmLogMaxAge <EnhancedTimeSpan>] [-IrmLogMaxDirectorySize <Unlimited>]
 [-IrmLogMaxFileSize <ByteQuantifiedSize>] [-IrmLogPath <LocalLongFullPath>] [-IsOutOfService <$true | $false>]
 [-WhatIf] [-Array <ClientAccessArrayIdParameter>] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

You can run the Set-ClientAccessServer cmdlet for a single Client Access server or for all servers running Microsoft Exchange Server 2010 that have the Client Access server role installed in your organization.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Client Access server settings" entry in the Client Access Permissions topic.

!!! Exchange Server 2013

You can run the Set-ClientAccessServer cmdlet for a single Client Access server or for all Client Access servers in your Exchange organization.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Client Access server settings" entry in the Clients and mobile devices permissions topic.

!!! Exchange Server 2016

The Set-ClientAccessServer cmdlet will be removed in a future version of Exchange. You should use the Set-ClientAccessService cmdlet instead.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Set-ClientAccessServer -Identity "CAS-01" -AutoDiscoverServiceInternalUri "https://cas01.contoso.com/autodiscover/autodiscover.xml" -AutoDiscoverSiteScope "Mail"
```

This example sets two properties on the Client Access server CAS-01.

### Example 1 -------------------------- (Exchange Server 2013)
```
Set-ClientAccessServer -Identity "CAS-01" -AutoDiscoverServiceInternalUri "https://cas01.contoso.com/autodiscover/autodiscover.xml" -AutoDiscoverSiteScope "Mail"
```

This example sets two properties on the Client Access server CAS-01.

### Example 1 -------------------------- (Exchange Server 2016)
```
Set-ClientAccessServer -Identity "MBX-01" -AutoDiscoverServiceInternalUri "https://mbx01.contoso.com/autodiscover/autodiscover.xml" -AutoDiscoverSiteScope "Mail"
```

This example configures the internal Autodiscover URL for the Active Directory site named Mail in the client access services on the server named MBX-01.

### Example 2 -------------------------- (Exchange Server 2010)
```
Set-ClientAccessServer -Identity "CASMail" -AutoDiscoverServiceInternalUri "https://casmail.contoso.com/autodiscover/autodiscover.xml" -AutoDiscoverSiteScope "Mail"
```

This example sets two properties on the Client Access server CASMail.

### Example 2 -------------------------- (Exchange Server 2013)
```
Set-ClientAccessServer -Identity "CASMail" -AutoDiscoverServiceInternalUri "https://casmail.contoso.com/autodiscover/autodiscover.xml" -AutoDiscoverSiteScope "Mail"
```

This example sets two properties on the Client Access server CASMail.

### Example 3 -------------------------- (Exchange Server 2010)
```
Set-ClientAccessServer -Identity "WebMail" -AutoDiscoverServiceInternalUri "https://webmail.contoso.com/autodiscover/autodiscover.xml" -AutoDiscoverSiteScope "Mail"
```

This example sets several properties on the Client Access server WebMail.

### Example 3 -------------------------- (Exchange Server 2013)
```
Set-ClientAccessServer -Identity "WebMail" -AutoDiscoverServiceInternalUri "https://webmail.contoso.com/autodiscover/autodiscover.xml" -AutoDiscoverSiteScope "Mail"
```

This example sets two properties on the Client Access server WebMail.

## PARAMETERS

### -Identity
!!! Exchange Server 2010, Exchange Server 2013

The Identity parameter specifies an individual Client Access server.



!!! Exchange Server 2016

The Identity parameter specifies the server that you want to modify. You can use any value that uniquely identifies the server. For example:

- Name

- Distinguished name (DN)

- FQDN

- GUID



```yaml
Type: ClientAccessServerIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -AlternateServiceAccountCredential
!!! Exchange Server 2010, Exchange Server 2013

The AlternateServiceAccountCredential parameter specifies a credential (consisting of a user name and password) to distribute to all Client Access servers in an organization.



!!! Exchange Server 2016

The AlternateServiceAccountCredential parameter specifies a credential an alternative service account that's typically used for Kerberos authentication in Exchange Server 2010 coexistence environments.

This parameter requires you to create a credentials object by using the Get-Credential cmdlet. For more information, see Get-Credential (https://go.microsoft.com/fwlink/p/?linkId=142122).



```yaml
Type: PSCredential[]
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutoDiscoverServiceInternalUri
The AutoDiscoverServiceInternalUri parameter specifies the internal URL of the Autodiscover service.

```yaml
Type: Uri
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutoDiscoverSiteScope
!!! Exchange Server 2010, Exchange Server 2013

The AutoDiscoverSiteScope parameter specifies the site for which the Autodiscover service is authoritative. Clients that connect to the Autodiscover service by using the internal URL must belong to a listed site.



!!! Exchange Server 2016

The AutoDiscoverSiteScope parameter specifies the Active Directory site that the Autodiscover service is authoritative for. Clients that connect to the Autodiscover service by using the internal URL need to exist in the specified site.

To see the available Active Directory sites, use the Get-ADSite cmdlet.

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>.... If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>"....

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.



```yaml
Type: MultiValuedProperty
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CleanUpInvalidAlternateServiceAccountCredentials
!!! Exchange Server 2010, Exchange Server 2013

The CleanUpInvalidAlternateServiceAccountCredentials parameter specifies whether to remove a previously set alternate service account credential that's no longer valid.



!!! Exchange Server 2016

The CleanUpInvalidAlternateServiceAccountCredentialsswitch specifies whether to remove a previously configured alternate service account that's no longer valid. You don't need to specify a value with this switch.



```yaml
Type: SwitchParameter
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
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
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IrmLogEnabled
The IrmLogEnabled parameter specifies whether logging is enabled for Information Rights Management (IRM).

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IrmLogMaxAge
The IrmLogMaxAge parameter specifies the max age for IRM logs. Logs older than the specified value are deleted.

To specify a value, enter it as a time span: dd.hh:mm:ss where d = days, h = hours, m = minutes, and s = seconds.

For example, to specify a 15-hour interval, enter 15:00:00.

```yaml
Type: EnhancedTimeSpan
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IrmLogMaxDirectorySize
The IrmLogMaxDirectorySize parameter specifies the maximum directory size for IRM logs. When the maximum directory size is reached, the server deletes the old log files first.

A value of unlimited means no limit for the maximum directory size for the IRM logs.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IrmLogMaxFileSize
The IrmLogMaxFileSize parameter specifies the maximum size of the IRM log. This value can't be larger than the IrmLogMaxDirectorySize parameter.

```yaml
Type: ByteQuantifiedSize
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IrmLogPath
The IrmLogPath parameter specifies the path to the log file.

```yaml
Type: LocalLongFullPath
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsOutOfService
This parameter is reserved for internal Microsoft use.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveAlternateServiceAccountCredentials
!!! Exchange Server 2010, Exchange Server 2013

The RemoveAlternateServiceAccountCredentials parameter specifies whether to remove a previously distributed alternate service account credential.



!!! Exchange Server 2016

The RemoveAlternateServiceAccountCredentialsswitch specifies whether to remove a previously distributed alternate service account. You don't need to specify a value with this switch.



```yaml
Type: SwitchParameter
Parameter Sets: Set2
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

### -Array
This parameter is reserved for internal Microsoft use.

```yaml
Type: ClientAccessArrayIdParameter
Parameter Sets: Set1
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

[Online Version](https://technet.microsoft.com/library/ee636e80-7111-4d99-8d48-db200d1f78d3.aspx)

