---
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# New-SPEnterpriseSearchCrawlRule

## SYNOPSIS
Creates a new crawl rule.

## SYNTAX

```
New-SPEnterpriseSearchCrawlRule [-AccountName <String>] [-AccountPassword <SecureString>]
 [-AssignmentCollection <SPAssignmentCollection>] [-AuthenticationType <CrawlRuleAuthenticationType>]
 [-Confirm] [-ContentClass <String>] [-CrawlAsHttp <Boolean>] [-FollowComplexUrls <Boolean>]
 [-IsAdvancedRegularExpression <Boolean>] -Path <String> [-PluggableSecurityTimmerId <Int32>]
 [-Priority <Int32>] -SearchApplication <SearchServiceApplicationPipeBind> [-SuppressIndexing <Boolean>]
 -Type <CrawlRuleType> [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The New-SPEnterpriseSearchCrawlRule cmdlet creates special rules for crawling items that are contained in the specified path.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE------------------ (SharePoint Server 2013)
```
New-SPEnterpriseSearchCrawlRule -SearchApplication mySearchServiceApp -Identity http://ExampleSharePointSite -CrawlAsHttp 1 -Type InclusionRule
```

This example creates an inclusion type crawl rule for the site at http://ExampleSharePointSite.
The rule specifies that the site be crawled as an HTTP site.

### ------------------EXAMPLE------------------ (SharePoint Server 2016)
```
C:\PS>New-SPEnterpriseSearchCrawlRule -SearchApplication mySearchServiceApp -Identity http://ExampleSharePointSite -CrawlAsHttp 1 -Type InclusionRule
```

This example creates an inclusion type crawl rule for the site at http://ExampleSharePointSite.
The rule specifies that the site be crawled as an HTTP site.

## PARAMETERS

### -AccountName
**Below Content Applies To:**SharePoint Server 2013

{{Fill AccountName Description}}



**Below Content Applies To:**SharePoint Server 2016

Specifies the account to use when applying the crawl rule.



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AccountPassword
**Below Content Applies To:**SharePoint Server 2013

{{Fill AccountPassword Description}}



**Below Content Applies To:**SharePoint Server 2016

Specifies the account to use when applying the crawl rule.



```yaml
Type: SecureString
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AssignmentCollection
**Below Content Applies To:**SharePoint Server 2013

{{Fill AssignmentCollection Description}}



**Below Content Applies To:**SharePoint Server 2016

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
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -AuthenticationType
**Below Content Applies To:**SharePoint Server 2013

{{Fill AuthenticationType Description}}



**Below Content Applies To:**SharePoint Server 2016

Specifies one of the following authentication types to access matching URLs:

BasicAccountRuleAccess -- Specifies the account name and password that are required for this authentication type.

CertificateRuleAccess -- Specifies the valid client certificate name that is required for this authentication type.

NTLMAccountRuleAccess -- Specifies the account name for integrated authentication.

FormRuleAccess -- Specifies a valid URL for HTTP POST or HTTP GET, public and private parameters, and a list of error pages that are used by this authentication type.

CookieRuleAccess -- Specifies private parameters and a list of error pages that are used by this authentication type.

AnonymousAccess-- Specifies that the matching URLs have to be accessed anonymously.



```yaml
Type: CrawlRuleAuthenticationType
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
**Below Content Applies To:**SharePoint Server 2013

Prompts you for confirmation before running the cmdlet.



**Below Content Applies To:**SharePoint Server 2016

Prompts you for confirmation before executing the command.
For more information, type the following command: get-help about_commonparameters



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ContentClass
**Below Content Applies To:**SharePoint Server 2013

{{Fill ContentClass Description}}



**Below Content Applies To:**SharePoint Server 2016

Specifies the string that is sent to the protocol handler for any content that matches the crawl rule.



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CrawlAsHttp
**Below Content Applies To:**SharePoint Server 2013

{{Fill CrawlAsHttp Description}}



**Below Content Applies To:**SharePoint Server 2016

Specifies whether the crawler should crawl content from a hierarchical content source as HTTP content.



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FollowComplexUrls
**Below Content Applies To:**SharePoint Server 2013

{{Fill FollowComplexUrls Description}}



**Below Content Applies To:**SharePoint Server 2016

Specifies whether the index engine should crawl content with URLs that contain a question mark (?).



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsAdvancedRegularExpression
**Below Content Applies To:**SharePoint Server 2013

{{Fill IsAdvancedRegularExpression Description}}



**Below Content Applies To:**SharePoint Server 2016

Specifies whether the rule has a full regular expression syntax.

The default value is False.



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Path
**Below Content Applies To:**SharePoint Server 2013

{{Fill Path Description}}



**Below Content Applies To:**SharePoint Server 2016

Specifies a unique path to which a crawl rule applies.



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PluggableSecurityTimmerId
{{Fill PluggableSecurityTimmerId Description}}

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Priority
**Below Content Applies To:**SharePoint Server 2013

{{Fill Priority Description}}



**Below Content Applies To:**SharePoint Server 2016

Defines where in the list of crawl rules this crawl rule should be applied.

The priority value cannot be less than 0 or greater than or equal to the number of crawl rules for the search application.



```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SearchApplication
**Below Content Applies To:**SharePoint Server 2013

{{Fill SearchApplication Description}}



**Below Content Applies To:**SharePoint Server 2016

Specifies the Search application that is associated with the crawl rule to be modified.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid search application name (for example, SearchApp1); or an instance of a valid SearchServiceApplication object.



```yaml
Type: SearchServiceApplicationPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -SuppressIndexing
**Below Content Applies To:**SharePoint Server 2013

{{Fill SuppressIndexing Description}}



**Below Content Applies To:**SharePoint Server 2016

Specifies whether the crawler should exclude the content of items that this rule applies to from the content index.



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Type
**Below Content Applies To:**SharePoint Server 2013

{{Fill Type Description}}



**Below Content Applies To:**SharePoint Server 2016

Specifies the type of crawl rule.
A value of zero (0) includes the rule, a value of 1 excludes the rule.



```yaml
Type: CrawlRuleType
Parameter Sets: (All)
Aliases: t
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
**Below Content Applies To:**SharePoint Server 2013

Shows what would happen if the cmdlet runs.
The cmdlet is not run.



**Below Content Applies To:**SharePoint Server 2016

Displays a message that describes the effect of the command instead of executing the command.
For more information, type the following command: get-help about_commonparameters



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/f299d577-acd6-4da3-975e-f0a0b9092aa8(Office.15).aspx)

