---
external help file: sharepoint.xml
online version: http://technet.microsoft.com/EN-US/library/f8baccd0-21d2-40aa-b700-997ec7ca7011(Office.15).aspx
schema: 2.0.0
---

# Set-SPEnterpriseSearchService

## SYNOPSIS
Sets the properties of a search service for a farm.

## SYNTAX

```
Set-SPEnterpriseSearchService [[-Identity] <SearchServicePipeBind>] [-AcknowledgementTimeout <String>]
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-ConnectionTimeout <String>]
 [-ContactEmail <String>] [-IgnoreSSLWarnings <String>] [-InternetIdentity <String>]
 [-PerformanceLevel <String>] [-ProxyType <String>] [-ServiceAccount <String>]
 [-ServicePassword <SecureString>] [-WhatIf]
```

## DESCRIPTION
This cmdlet updates properties of a search service for a farm.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE------------------ (SharePoint Server 2013)
```
$password = Read-Host -AsSecureString**********

Set-SPEnterpriseSearchService -IgnoreSSLWarnings $true -ServiceAccount contoso\adminAccount -ServicePassword $password
```

This example configures the search service to ignore SSL warnings, and changes the service account for the search service.

### ------------------EXAMPLE------------------ (SharePoint Server 2016)
```
C:\PS>$password = Read-Host -AsSecureString
**********
Set-SPEnterpriseSearchService -IgnoreSSLWarnings $true -ServiceAccount contoso\adminAccount -ServicePassword $password
```

This example configures the search service to ignore SSL warnings, and changes the service account for the search service.

## PARAMETERS

### -Identity
Specifies the search service to update.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid search application name (for example, SearchService1); or an instance of a valid SearchService object.

```yaml
Type: SearchServicePipeBind
Parameter Sets: (All)
Aliases: 

Required: False
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -AcknowledgementTimeout
Below Content Applies To: SharePoint Server 2013

Specifies the time in seconds that the crawl component will wait for request acknowledgement while connecting to other services.

The type must be string input that can be parsed to an integer value.
Below Content Applies To: SharePoint Server 2016

Specifies the time in seconds that the search server will wait for request acknowledgement while connecting to other services.

The type must be string input that can be parsed to an integer value.

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

### -AssignmentCollection
Manages objects for the purpose of proper disposal.
Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management.
Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory.
When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store.
If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.

```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.
For more information, type the following command: get-help about_commonparameters

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConnectionTimeout
Below Content Applies To: SharePoint Server 2013

Specifies the time in seconds that the crawl component waits while connecting to other services.

The type must be string input that can be parsed to an integer value.
Below Content Applies To: SharePoint Server 2016

Specifies the time in seconds that the search server waits while connecting to other services.

The type must be string input that can be parsed to an integer value.

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

### -ContactEmail
Specifies an e-mail address to which external site administrators can write if problems occur when the site is being crawled.

The type must be a valid e-mail address, in the form MyAddress@mycompany.com.

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

### -IgnoreSSLWarnings
Specifies that the search service will ignore Secure Sockets Layer (SSL) certificate name warnings.
The default value is False.

The type must be a string that can be cast to a Boolean value, for example, True or False.

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

### -InternetIdentity
Specifies the value that the crawler sends in the headers of its HTTP requests to sites when it fetches their pages.

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

### -PerformanceLevel
Below Content Applies To: SharePoint Server 2013

Specifies the relative number of threads for the crawl component performance.

The type must be one of the following values: Reduced, PartlyReduced, or Maximum.
The default value is Maximum.

Reduced: Total number of threads = number of processors, Max Threads/host = number of processors.

Partly Reduced: Total number of threads = 16 times the number of processors , Max Threads/host = 4 plus the number of processors.
Threads are assigned Below Normal priority.

Maximum: Total number of threads = 32 times the number of processors, Max Threads/host = 4 plus the number of processors.
Threads are assigned Normal priority.
Below Content Applies To: SharePoint Server 2016

Specifies the relative number of threads for the indexer performance:

Reduced: Total number of threads = number of processors, Max Threads/host =  number of processors

Partly Reduced:  Total number of threads = 4 times the number of processors , Max Threads/host = 16 time the number of processors

Maximum: Total number of threads = number of processors

The type must be one of the following values:   Reduced,    PartlyReduced, or Maximum.

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

### -ProxyType
Specifies whether the search service uses a proxy server or connects directly when crawling content.
The default value is Direct, (No proxy server is used).

The type must be one of the following values: Direct or Proxy.

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

### -ServiceAccount
Below Content Applies To: SharePoint Server 2013

Specifies the user account or service account to use for running the search service.
The type must be a valid account name on the domain, in the form Domain\user name or user name.

When this parameter is used, the ServicePassword parameter must also be specified.

After using this cmdlet to change the service account, you must restart the SharePoint 2013 Search Host Controller service on servers hosting any of the following search components: the index component, query processing component, search administration component, content processing component, or analytics processing component.
Below Content Applies To: SharePoint Server 2016

Specifies the user account or service account to use for running the Office Server Search service.
When this parameter is used, the ServicePassword parameter must also be specified.

The type must be a valid account name on the domain, in the form Domain\user name or user name.

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

### -ServicePassword
Specifies the password for the service account specified in ServiceAccount.

The type must contain the domain password to the account specified in the ServiceAccount parameter.

```yaml
Type: SecureString
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Displays a message that describes the effect of the command instead of executing the command.
For more information, type the following command: get-help about_commonparameters

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/f8baccd0-21d2-40aa-b700-997ec7ca7011(Office.15).aspx)

