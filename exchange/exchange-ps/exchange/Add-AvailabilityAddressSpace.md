---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
schema: 2.0.0
---

# Add-AvailabilityAddressSpace

## SYNOPSIS
!!! Exchange Server 2010

Use the Add-AvailabilityAddressSpace cmdlet to define the access method and associated credentials used to exchange free/busy data across forests.

You can add a maximum of 100 address spaces.

!!! Exchange Server 2013

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Add-AvailabilityAddressSpace cmdlet to define the access method and associated credentials used to exchange free/busy data across forests.

The maximum number off Availability address spaces returned by Active Directory to Exchange is 100. Microsoft recommends using 100 or fewer address spaces in order for Availability lookups to work properly.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

!!! Exchange Server 2016, Exchange Online

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Add-AvailabilityAddressSpace cmdlet to create availability address space objects that are used to share free/busy data across Exchange organizations.

The maximum number off Availability address spaces returned by Active Directory to Exchange is 100. We recommend using 100 or fewer address spaces in order for Availability lookups to work properly.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Add-AvailabilityAddressSpace -AccessMethod <PerUserFB | OrgWideFB | PublicFolder | InternalProxy>
 -ForestName <String> [-Confirm] [-Credentials <PSCredential>] [-DomainController <Fqdn>] [-ProxyUrl <Uri>]
 [-UseServiceAccount <$true | $false>] [-WhatIf] [-TargetAutodiscoverEpr <Uri>] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

To effectively use the command, run it on a computer that has the Client Access server role installed.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Availability address space settings" entry in the Client Access Permissions topic.

!!! Exchange Server 2013

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Availability service address space settings" entry in the Clients and mobile devices permissions topic.

!!! Exchange Server 2016, Exchange Online

In Exchange Online, you need to run the Add-AvailabilityConfig cmdlet before you run the Add-AvailabilityAddressSpace cmdlet.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Add-AvailabilityAddressSpace -ForestName <example.contoso.com> -AccessMethod OrgWideFB -Credentials <ExampleCredential>
```

This example is useful with an untrusted cross-forest Availability service, or if detailed cross-forest free/busy service isn't desired. When you're prompted by the command, type a user name and password. For an untrusted cross-forest configuration, make sure that the user doesn't have a mailbox.

### Example 1 -------------------------- (Exchange Server 2013)
```
Add-AvailabilityAddressSpace -ForestName <example.contoso.com> -AccessMethod OrgWideFB -Credentials <ExampleCredential>
```

This example is useful with an untrusted cross-forest Availability service, or if detailed cross-forest free/busy service isn't desired. Enter a user name and password when you're prompted by the command. For an untrusted cross-forest configuration, make sure that the user doesn't have a mailbox.

### Example 1 -------------------------- (Exchange Server 2016)
```
Add-AvailabilityAddressSpace -ForestName example.contoso.com -AccessMethod OrgWideFB -Credentials (Get-Credential)
```

This example is useful with an untrusted cross-forest Availability service, or if detailed cross-forest free/busy service isn't desired. Enter a user name and password when you're prompted by the command. For an untrusted cross-forest configuration, make sure that the user doesn't have a mailbox.

### Example 1 -------------------------- (Exchange Online)
```
Add-AvailabilityAddressSpace -ForestName example.contoso.com -AccessMethod OrgWideFB -Credentials (Get-Credential)
```

This example is useful with an untrusted cross-forest Availability service, or if detailed cross-forest free/busy service isn't desired. Enter a user name and password when you're prompted by the command. For an untrusted cross-forest configuration, make sure that the user doesn't have a mailbox.

### Example 2 -------------------------- (Exchange Server 2010)
```
Add-AvailabilityAddressSpace -ForestName <example.contoso.com> -AccessMethod PerUserFB -Credentials <ExampleCredential>
```

This example is useful with a trusted cross-forest Availability service. The contoso.com forest trusts the current forest, and the specified account connects to the contoso.com forest. The specified account must be an existing account in the contoso.com forest.

### Example 2 -------------------------- (Exchange Server 2013)
```
Add-AvailabilityAddressSpace -ForestName <example.contoso.com> -AccessMethod PerUserFB -Credentials <ExampleCredential>
```

This example is useful with a trusted cross-forest Availability service. The contoso.com forest trusts the current forest, and the specified account connects to the contoso.com forest. The specified account must be an existing account in the contoso.com forest.

### Example 2 -------------------------- (Exchange Server 2016)
```
Add-AvailabilityAddressSpace -ForestName example.contoso.com -AccessMethod PerUserFB -Credentials (Get-Credential)
```

This example is useful with a trusted cross-forest Availability service. The contoso.com forest trusts the current forest, and the specified account connects to the contoso.com forest. The specified account must be an existing account in the contoso.com forest.

### Example 2 -------------------------- (Exchange Online)
```
Add-AvailabilityAddressSpace -ForestName example.contoso.com -AccessMethod PerUserFB -Credentials (Get-Credential)
```

This example is useful with a trusted cross-forest Availability service. The contoso.com forest trusts the current forest, and the specified account connects to the contoso.com forest. The specified account must be an existing account in the contoso.com forest.

### Example 3 -------------------------- (Exchange Server 2010)
```
Add-AvailabilityAddressSpace -ForestName <example.contoso.com> -AccessMethod PerUserFB -UseServiceAccount $true
```

This example is useful with a trusted cross-forest Availability service. The contoso.com forest trusts the current forest and uses the service account (typically the local system account or the computer account) to connect to the contoso.com forest. Because the service is trusted, there is no issue with authorization when the current forest tries to retrieve free/busy information from contoso.com.

### Example 3 -------------------------- (Exchange Server 2013)
```
Add-AvailabilityAddressSpace -ForestName <example.contoso.com> -AccessMethod PerUserFB -UseServiceAccount $true
```

This example is useful with a trusted cross-forest Availability service. The contoso.com forest trusts the current forest and uses the service account (typically the local system account or the computer account) to connect to the contoso.com forest. Because the service is trusted, there is no issue with authorization when the current forest tries to retrieve free/busy information from contoso.com.

### Example 3 -------------------------- (Exchange Server 2016)
```
Add-AvailabilityAddressSpace -ForestName example.contoso.com -AccessMethod PerUserFB -UseServiceAccount $true
```

This example is useful with a trusted cross-forest Availability service. The contoso.com forest trusts the current forest and uses the service account (typically the local system account or the computer account) to connect to the contoso.com forest. Because the service is trusted, there is no issue with authorization when the current forest tries to retrieve free/busy information from contoso.com.

### Example 3 -------------------------- (Exchange Online)
```
Add-AvailabilityAddressSpace -ForestName example.contoso.com -AccessMethod PerUserFB -UseServiceAccount $true
```

This example is useful with a trusted cross-forest Availability service. The contoso.com forest trusts the current forest and uses the service account (typically the local system account or the computer account) to connect to the contoso.com forest. Because the service is trusted, there is no issue with authorization when the current forest tries to retrieve free/busy information from contoso.com.

### Example 4 -------------------------- (Exchange Server 2010)
```
Add-AvailabilityAddressSpace -ForestName <example.contoso.com> -AccessMethod PublicFolder
```

This example is useful for interoperability between Exchange 2010 and versions of Exchange earlier than Exchange 2007, for example Exchange 2003.

### Example 4 -------------------------- (Exchange Server 2013)
```
Add-AvailabilityAddressSpace -ForestName <example.contoso.com> -AccessMethod PublicFolder
```

This example is useful for interoperability between Exchange 2013 and versions of Exchange earlier than Exchange 2007, for example Exchange 2003.

## PARAMETERS

### -AccessMethod
!!! Exchange Server 2010

The AccessMethod parameter, when assigned the PerUserFB value, causes the command to access the free/busy data in the defined per-user free/busy proxy account or group, or in the All Exchange Servers group. The PerUserFB value requires trust between the two forests. You must use either the UseServiceAccount parameter or Credentials parameter.

Use the OrgWideFB value to access the free/busy data in the per-user free/busy proxy account or group in the target forest. You must use either the UseServiceAccount parameter or Credentials parameter.

Use the PublicFolder value to access free/busy data on servers running Microsoft Exchange Server 2003. The Exchange Inter-Organization Replication tool must be running between the two forests.



!!! Exchange Server 2013

The AccessMethod parameter specifies the availability access method and can have the following values:

- PerUserFB This value causes the command to access the free/busy data in the defined per-user free/busy proxy account or group, or in the All Exchange Servers group. The PerUserFB value requires trust between the two forests. You must use either the UseServiceAccount parameter or Credentials parameter.

- OrgWideFB This value causes the command to access the free/busy data in the per-user free/busy proxy account or group in the target forest. You must use either the UseServiceAccount parameter or Credentials parameter.

- OrgWideFBBasic This value is reserved for internal Microsoft use.

- InternalProxy This value is used to proxy a request to the Client Access server in the site with the latest version of Exchange.

- PublicFolder This value causes the command to access free/busy data on servers running MicrosoftExchange Server 2003. The Exchange Inter-Organization Replication tool must be running between the two forests.



!!! Exchange Server 2016, Exchange Online

The AccessMethod parameter specifies how the free/busy data is accessed. Valid values are:

- PerUserFB: Per-user free/busy information can be requested. The free/busy data is accessed in the defined per-user free/busy proxy account or group, or in the All Exchange Servers group. This value requires a trust between the two forests, and requires you to use either the UseServiceAccount parameter or Credentials parameter.

- OrgWideFB: Only default free/busy for each user can be requested. The free/busy data is accessed in the per-user free/busy proxy account or group in the target forest. This value requires you to use either the UseServiceAccount parameter or Credentials parameter.

- OrgWideFBBasic: This value is reserved for internal Microsoft use.

- InternalProxy: The request is proxied to an Exchange in the site that has a later version of Exchange.

- PublicFolder: This value was used to access free/busy data on Exchange Server 2003 servers.



```yaml
Type: PerUserFB | OrgWideFB | PublicFolder | InternalProxy
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ForestName
!!! Exchange Server 2010

The ForestName parameter specifies the SMTP domain name of the target forest for users whose free/busy data must be retrieved. If your users are distributed among multiple SMTP domains in the target forest, run the Add-AvailabilityAddressSpace command once for each SMTP domain.

You can add a maximum of 100 address spaces.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

The ForestName parameter specifies the SMTP domain name of the target forest for users whose free/busy data must be retrieved. If your users are distributed among multiple SMTP domains in the target forest, run the Add-AvailabilityAddressSpace command once for each SMTP domain.



```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

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
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Credentials
!!! Exchange Server 2010

The Credentials parameter specifies the credentials for an account that has permission to access the Availability services in the target forest.



!!! Exchange Server 2013

The Credentials parameter specifies the credentials for an account that has permission to access the Availability services in the target forest.

This parameter requires the creation and passing of a credential object. This credential object is created by using the Get-Credential cmdlet. For more information, see Get-Credential (https://go.microsoft.com/fwlink/p/?linkId=142122).



!!! Exchange Server 2016, Exchange Online

The Credentials parameter specifies the credentials for an account that has permission to access the Availability services in the target forest.

This parameter requires you to create a credentials object by using the Get-Credential cmdlet. For more information, see Get-Credential (https://go.microsoft.com/fwlink/p/?linkId=142122).



```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
!!! Exchange Server 2010

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.



```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProxyUrl
!!! Exchange Server 2010

The ProxyUrl parameter specifies whether to direct a Microsoft Exchange Server 2007 Client Access server to proxy its free/busy requests through an Exchange Server 2010 Client Access server when requesting federated free/busy data for a user in another organization.

Before you can configure this setting, you must create the proper trust relationships and sharing relationships. For more information, see New-FederationTrust.



!!! Exchange Server 2013

This parameter is available only in on-premises Exchange.

The ProxyUrl parameter specifies whether to direct a Microsoft Exchange Server 2007 Client Access server to proxy its free/busy requests through an Exchange Server 2013 Client Access server when requesting federated free/busy data for a user in another organization.

Before you can configure this setting, you must create the proper trust relationships and sharing relationships. For more information, see New-FederationTrust.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The ProxyUrl parameter was used to specify the URL that directed an Exchange 2007 Client Access server to proxy its free/busy requests through an Exchange 2010 or Exchange 2013 Client Access server when requesting federated free/busy data for a user in another organization. When you used this parameter, you needed to set the value of the AccessMethod parameter to InternalProxy.

This parameter required that you created the proper trust relationships and sharing relationships between the Exchange organizations. For more information, see New-FederationTrust.



```yaml
Type: Uri
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseServiceAccount
!!! Exchange Server 2010

The UseServiceAccount parameter, when assigned a value of $true, uses the local Availability service account for authorization.



!!! Exchange Server 2013

This parameter is available only in on-premises Exchange.

The UseServiceAccount parameter, when assigned a value of $true, uses the local Availability service account for authorization.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The UseServiceAccount parameter specifies whether to use the local Availability service account for authorization. Valid values

- $true: The local Availability service account is used for authorization.

- $false: The local Availability service account isn't used for authorization. You need to use the Credentials parameter.



```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetAutodiscoverEpr
The TargetAutodiscoverEpr parameter specifies the Autodiscover URL of Exchange Web Services for the external organization, for example, https://contoso.com/autodiscover/autodiscover.xml. Exchange uses Autodiscover to automatically detect the correct server endpoint for external requests.

```yaml
Type: Uri
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

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

[Online Version](https://technet.microsoft.com/library/abbd48f3-adf6-40ed-9a52-36800d8429ef.aspx)

