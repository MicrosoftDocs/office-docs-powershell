---
external help file: Microsoft.Office.Server.Search.dll-help.xml
Module Name: Microsoft.SharePoint.Powershell
online version: https://docs.microsoft.com/powershell/module/sharepoint-server/set-spenterprisesearchcrawlrule
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: Set-SPEnterpriseSearchCrawlRule
schema: 2.0.0
author: techwriter40
ms.author: pamgreen
ms.reviewer:
---

# Set-SPEnterpriseSearchCrawlRule

## SYNOPSIS
Sets properties for a crawl rule.


## SYNTAX

```
Set-SPEnterpriseSearchCrawlRule [-AccountName <String>] [-AccountPassword <SecureString>]
 [-AssignmentCollection <SPAssignmentCollection>] [-AuthenticationType <CrawlRuleAuthenticationType>]
 [-Confirm] [-ContentClass <String>] [-CrawlAsHttp <Boolean>] [-FollowComplexUrls <Boolean>]
 -Identity <CrawlRulePipeBind> [-IsAdvancedRegularExpression <Boolean>] [-PluggableSecurityTimmerId <Int32>]
 [-Priority <Int32>] [-SearchApplication <SearchServiceApplicationPipeBind>] [-SuppressIndexing <Boolean>]
 [-Type <CrawlRuleType>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
A search administrator runs the `Set-SPEnterpriseSearchCrawlRule` cmdlet at initial search configuration or any other time, to set or update various attributes of a crawl rule.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at [SharePoint Server Cmdlets](https://docs.microsoft.com/powershell/sharepoint/sharepoint-server/sharepoint-server-cmdlets).


## EXAMPLES

### ------------------EXAMPLE------------------
```
$ssa = Get-SPEnterpriseSearchServiceApplication
$crawlRule = Get-SPEnterpriseSearchCrawlRule -Identity 'file://fileserver/root' -SearchApplication $ssa
Set-SPEnterpriseSearchCrawlRule -Identity $crawlRule -Type "ExclusionRule"
```

This example sets the type of the crawl rule pertaining to the URL, file://fileserver/root, to exclude this path from future crawls.


## PARAMETERS

### -AccountName
Specifies the name of the account to be used to crawl content identified by the crawl rule.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AccountPassword
Specifies the password for AccountName.

```yaml
Type: SecureString
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

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
If objects are not immediately used, or disposed of by using the `Stop-SPAssignment` command, an out-of-memory scenario can occur.


```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -AuthenticationType
Specifies one of the following authentication types:

- BasicAccountRuleAccess   -Specifies basic authentication.

- CertificateRuleAccess   -Specifies the X.509 certificate name.

- NTLMAccountRuleAccess   -Specifies the account name for integrated authentication.


```yaml
Type: CrawlRuleAuthenticationType
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.
For more information, type the following command: `get-help about_commonparameters`


```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ContentClass
Specifies a string that is sent to the protocol handler for any content that matches the crawl rule.


```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CrawlAsHttp
Specifies whether the crawler crawls content from a hierarchical content source as HTTP content.


```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FollowComplexUrls
Specifies whether the index engine crawls content from URLs that contain a question mark (?).


```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Specifies the name of the crawl rule.

The type must be a valid crawl rule URL, such as https://server_name, or an instance of a valid CrawlRule object.


```yaml
Type: CrawlRulePipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -IsAdvancedRegularExpression
Specifies whether the rule has full regular expression syntax.

The default value is False.


```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PluggableSecurityTimmerId
Specifies the ID of the custom pluggable security trimmer to use, if registered.


```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Priority
Defines where in the list of crawl rules this crawl rule is to be applied.

The priority value cannot be less than 0 or greater than or equal to the number of crawl rules for the search application.


```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SearchApplication
The name of the search application that is associated with the crawl rule to be modified.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid search application name (for example, SearchApp1); or an instance of a valid SearchServiceApplication object.


```yaml
Type: SearchServiceApplicationPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SuppressIndexing
Specifies whether the crawler excludes the content of items, to which this rule applies, from the content index.


```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Type
Specifies the type of crawl rule.
A value of zero (0) includes the rule and a value of 1 excludes the rule.


```yaml
Type: CrawlRuleType
Parameter Sets: (All)
Aliases: t
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Displays a message that describes the effect of the command instead of executing the command.
For more information, type the following command: `get-help about_commonparameters`


```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
