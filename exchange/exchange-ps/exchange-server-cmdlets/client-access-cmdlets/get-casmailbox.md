---
title: "Get-CASMailbox"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: d80a5990-9106-4eb8-bba8-b3975805c325

description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Get-CASMailbox

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Get-CASMailbox** cmdlet to view the Client Access settings that are configured on mailboxes.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-CASMailbox [-Identity <MailboxIdParameter>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example returns the values of the following client access settings for the user named Jeff Hay.
  
- _ActiveSyncEnabled_
    
- _OWAEnabled_
    
- _PopEnabled_
    
- _ImapEnabled_
    
- _MapiEnabled_
    
```
Get-CASMailbox "Jeff Hay"
```

### Example 2

This example returns all IMAP4 settings for the user tony@contoso.com.
  
```
Get-CASMailbox tony@contoso.com | Format-List Imap*
```

### Example 3

This example returns all Exchange Web Services settings for the user chris@contoso.com.
  
```
Get-CASMailbox chris@contoso.com | Format-List Ews*
```

## Detailed Description
<a name="DetailedDescription"> </a>

This cmdlet returns a variety of client access settings for one or more mailboxes. These settings include options for Outlook on the web, Exchange ActiveSync, POP3, and IMAP4.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _ActiveSyncDebugLogging_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _ActiveSyncDebugLogging_ switch shows the actual value of the **ActiveSyncDebugLogging** property for the mailbox. If you don't use this switch, the value always appears as `$false`.  <br/> To see this value, you need to use a formatting cmdlet. For example,  `Get-CasMailbox laura@contoso.com -ActiveSyncDebugLogging | Format-List`.  <br/> |
| _ActiveSyncSuppressReadReceipt_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _Anr_ <br/> |Optional  <br/> |System.String  <br/> | The _Anr_ parameter specifies a string on which to perform an ambiguous name resolution (ANR) search. You can specify a partial string and search for objects with an attribute that matches that string. The default attributes searched are: <br/> **CommonName (CN)** <br/> **DisplayName** <br/> **FirstName** <br/> **LastName** <br/> **Alias** <br/> |
| _Credential_ <br/> |Optional  <br/> |System.Management.Automation.PSCredential  <br/> |The _Credential_ parameter specifies the user name and password that's used to run this command. Typically, you use this parameter in scripts or when you need to provide different credentials that have the required permissions. <br/> This parameter requires the creation and passing of a credential object. This credential object is created by using the **Get-Credential** cmdlet. For more information, see[Get-Credential](https://go.microsoft.com/fwlink/p/?linkId=142122).  <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Filter_ <br/> |Optional  <br/> |System.String  <br/> | The _Filter_ parameter uses OPATH filter syntax to filter the results by the specified properties and values. The search criteria uses the syntax `{<Property> -<Comparison operator> '<Value>'}`.  <br/>  `<Property>` is a filterable property. <br/>  `-<Comparison Operator>` is an OPATH comparison operator. For example `-eq` for equals and `-like` for string comparison. For more information about comparison operators, see[about_Comparison_Operators](https://go.microsoft.com/fwlink/p/?LinkId=620712).  <br/>  `<Value>` is the property value. Text values with or without spaces need to be enclosed in quotation marks ( `'<Value>'`). Don't use quotation marks with integers or the system values  `$true`,  `$false`, or  `$null`.  <br/>  You can chain multiple search criteria together using the logical operators `-and` and `-or`. For example,  `{<Criteria1>) -and <Criteria2>}` or `{(<Criteria1> -and <Criteria2>) -or <Criteria3>}`.  <br/>  You can filter by the following properties: <br/> **ActiveSyncAllowedDeviceIDs** <br/> **ActiveSyncBlockedDeviceIDs** <br/> **ActiveSyncDebugLogging** <br/> **ActiveSyncEnabled** <br/> **ActiveSyncMailboxPolicy** <br/> **ActiveSyncSuppressReadReceipt** <br/> **DisplayName** <br/> **DistinguishedName** <br/> **ECPEnabled** <br/> **EmailAddresses** <br/> **EwsApplicationAccessPolicy** <br/> **EwsEnabled** <br/> **ExchangeVersion** <br/> **Guid** <br/> **HasActiveSyncDevicePartnership** <br/> **Id** <br/> **ImapEnabled** <br/> **LegacyExchangeDN** <br/> **MAPIEnabled** <br/> **Name** <br/> **ObjectCategory** <br/> **ObjectClass** <br/> **OWAEnabled** <br/> **OWAforDevicesEnabled** <br/> **OwaMailboxPolicy** <br/> **PopEnabled** <br/> **PrimarySmtpAddress** <br/> **SamAccountName** <br/> **ServerLegacyDN** <br/> **ServerName** <br/> **WhenChanged** <br/> **WhenChangedUTC** <br/> **WhenCreated** <br/> **WhenCreatedUTC** <br/>  For more information, see[Filterable properties for the -Filter parameter](../../filters-in-recipient-exchange-management-shell-commands/filterable-properties-for-the-filter-parameter.md).  <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxIdParameter  <br/> | The _Identity_ parameter specifies the mailbox that you want to view. You can use any value that uniquely identifies the mailbox. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/> _\<domain name\>_\ _\<account name\>_ <br/>  Email address <br/>  GUID <br/> **LegacyExchangeDN** <br/> **SamAccountName** <br/>  User ID or user principal name (UPN) <br/> |
| _IgnoreDefaultScope_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _IgnoreDefaultScope_ switch tells the command to ignore the default recipient scope setting for the Exchange Management Shell session, and to use the entire forest as the scope. This allows the command to access Active Directory objects that aren't currently available in the default scope. <br/>  Using the _IgnoreDefaultScope_ switch introduces the following restrictions: <br/>  You can't use the _DomainController_ parameter. The command uses an appropriate global catalog server automatically. <br/>  You can only use the DN for the _Identity_ parameter. Other forms of identification, such as alias or GUID, aren't accepted. <br/> |
| _Monitoring_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _Monitoring_ switch includes mailboxes that were created by monitoring accounts in the results. By default, these mailboxes aren't included in the results. You don't have to specify a value with this switch. <br/> |
| _OrganizationalUnit_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.OrganizationalUnitIdParameter  <br/> | The _OrganizationalUnit_ parameter filters the results based on the object's location in Active Directory. Only objects that exist in the specified location are returned. Valid input for this parameter is an organizational unit (OU) or domain that's visible using the **Get-OrganizationalUnit** cmdlet. You can use any value that uniquely identifies the OU or domain. For example: <br/>  Name <br/>  Canonical name <br/>  Distinguished name (DN) <br/>  GUID <br/> |
| _ProtocolSettings_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _ProtocolSettings_ switch returns the server names, TCP ports and encryption methods for the following settings: <br/> _ExternalImapSettings_ <br/> _InternalImapSettings_ <br/> _ExternalPopSettings_ <br/> _InternalPopSettings_ <br/> _ExternalSmtpSettings_ <br/> _InternalSmtpSettings_ <br/>  To see these values, you need to use a formatting cmdlet. For example, `Get-CasMailbox laura@contoso.com -ProtocolSettings | Format-List`.  <br/> |
| _ReadFromDomainController_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _ReadFromDomainController_ switch specifies that information should be read from a domain controller in the user's domain. If you run the command `Set-AdServerSettings -ViewEntireForest $true` to include all objects in the forest and you don't use the _ReadFromDomainController_ switch, it's possible that information will be read from a global catalog that has outdated information. When you use the _ReadFromDomainController_ switch, multiple reads might be necessary to get the information. You don't have to specify a value with this switch. <br/> > [!NOTE]> By default, the recipient scope is set to the domain that hosts your Exchange servers.           |
| _ReadIsOptimizedForAccessibility_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _ReadIsOptimizedForAccessibility_switch specifies whether to read the value of the **IsOptimizedForAccessibility** property on the mailbox (whether the mailbox is configured to use the light version of Outlook on the web). You don't need to specify a value with this switch. <br/> |
| _RecalculateHasActiveSyncDevicePartnership_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _RecalculateHasActiveSyncDevicePartnership_ switch recalculates the value of the **HasActiveSyncDevicePartnership** property on the mailbox. The value is automatically updated if it's found to be incorrect. You don't have to specify a value with this switch. <br/> |
| _ResultSize_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> |The _ResultSize_ parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use `unlimited` for the value of this parameter. The default value is `1000`.  <br/> |
| _SortBy_ <br/> |Optional  <br/> |System.String  <br/> | The _SortBy_ parameter specifies the property to sort the results by. You can sort by only one property at a time. The results are sorted in ascending order. <br/>  If the default view doesn't include the property you're sorting by, you can append the command with `| Format-Table -Auto <Property1>,<Property2>...` to create a new view that contains all of the properties that you want to see. Wildcards (*) in the property names are supported. <br/>  You can sort by the following properties: <br/> **Name** <br/> **DisplayName** <br/> **ServerLegacyDN** <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

