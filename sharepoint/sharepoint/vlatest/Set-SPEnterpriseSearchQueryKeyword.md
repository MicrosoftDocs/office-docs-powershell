---
external help file: sharepoint.xml
online version: http://technet.microsoft.com/EN-US/library/6dc6b5a5-56d9-4ae2-b0f4-f4cb85bc4dec(Office.15).aspx
schema: 2.0.0
---

# Set-SPEnterpriseSearchQueryKeyword

## SYNOPSIS
Sets the properties of a keyword term for a shared search application.

## SYNTAX

```
Set-SPEnterpriseSearchQueryKeyword [-AssignmentCollection <SPAssignmentCollection>] [-Confirm]
 [-Contact <String>] [-Definition <String>] [-EndDate <DateTime>] -Identity <KeywordPipeBind>
 [-ReviewDate <DateTime>] -Site <SPSitePipeBind> [-StartDate <DateTime>] [-Term <String>] [-WhatIf]
```

## DESCRIPTION
The Set-SPEnterpriseSearchQueryKeyword cmdlet updates properties and rules of a keyword term.
A query keyword is a query component of a query topology.
SPEnterpriseSearchQueryKeyword represents relevance setting through keywords.

You can use this cmdlet for keywords in site collections that are in SharePoint Server 2010 mode.
You cannot use this cmdlet after a site collection is upgraded to SharePoint Server 2013 mode because keywords and Best Bets are automatically migrated to query rules.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE------------------ (SharePoint Server 2013)
```
Get-SPEnterpriseSearchQueryKeyword -Identity Engineering -Site http://myserver/sites/engineering | Set-SPEnterpriseSearchQueryKeyword -StartDate "12/25/2009" -EndDate "12/24/2010" -Site http://myserver/sites/engineering
```

This example gets a reference to the keyword with the term Engineering from the site http://myserver/sites/engineering, and sets the start dates and end dates for the keyword.

### ------------------EXAMPLE------------------ (SharePoint Server 2016)
```
C:\PS>Get-SPEnterpriseSearchQueryKeyword -Identity Engineering -Site http://myserver/sites/engineering | Set-SPEnterpriseSearchQueryKeyword -StartDate "12/25/2009" -EndDate "12/24/2010" -Site http://myserver/sites/engineering
```

This example gets a reference to the keyword with the term Engineering from the site http://myserver/sites/engineering, and sets the start dates and end dates for the keyword.

## PARAMETERS

### -AssignmentCollection
Below Content Applies To: SharePoint Server 2013

{{Fill AssignmentCollection Description}} Below Content Applies To: SharePoint Server 2016

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
Below Content Applies To: SharePoint Server 2013

Prompts you for confirmation before running the cmdlet.
Below Content Applies To: SharePoint Server 2016

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

### -Contact
Below Content Applies To: SharePoint Server 2013

{{Fill Contact Description}} Below Content Applies To: SharePoint Server 2016

Specifies the user name associated with the new keyword.

The type must be a valid user name; for example, KeywordUser1.

```yaml
Type: String
Parameter Sets: (All)
Aliases: c

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Definition
Below Content Applies To: SharePoint Server 2013

{{Fill Definition Description}} Below Content Applies To: SharePoint Server 2016

Specifies the definition of the new keyword term.

The type must be a valid string; for example, a keyword term definition.

```yaml
Type: String
Parameter Sets: (All)
Aliases: d

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EndDate
Below Content Applies To: SharePoint Server 2013

{{Fill EndDate Description}} Below Content Applies To: SharePoint Server 2016

Specifies the expiration date of the keyword term.
The default value is MaxDate.

The type must be a valid DateTime type, in the form 2010,12,05.

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases: e

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Below Content Applies To: SharePoint Server 2013

{{Fill Identity Description}} Below Content Applies To: SharePoint Server 2016

Specifies the keyword term to update.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid string that contains a keyword term (for example, KeywordTerm1); or an instance of a valid Keyword object.

```yaml
Type: KeywordPipeBind
Parameter Sets: (All)
Aliases: 

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -ReviewDate
Below Content Applies To: SharePoint Server 2013

{{Fill ReviewDate Description}} Below Content Applies To: SharePoint Server 2016

Specifies the review date of the keyword term.
The default value is MaxDate.

The type must be a valid DateTime type, in the form 2010,12,05.

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases: r

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Site
Below Content Applies To: SharePoint Server 2013

{{Fill Site Description}} Below Content Applies To: SharePoint Server 2016

Associates the new keyword term to the specified results URL.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid URL, in the form http://server_name; or an instance of a valid SPSite object.

```yaml
Type: SPSitePipeBind
Parameter Sets: (All)
Aliases: 

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StartDate
Below Content Applies To: SharePoint Server 2013

{{Fill StartDate Description}} Below Content Applies To: SharePoint Server 2016

Specifies the activation date for the keyword term.
The default value is the current date.

The type must be a valid date, in the form 2010,12,05.

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases: s

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Term
Below Content Applies To: SharePoint Server 2013

{{Fill Term Description}} Below Content Applies To: SharePoint Server 2016

Specifies the keyword term that triggers keyword results.

The type must be a valid string; for example, a keyword term.

```yaml
Type: String
Parameter Sets: (All)
Aliases: t

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Below Content Applies To: SharePoint Server 2013

Shows what would happen if the cmdlet runs.
The cmdlet is not run.
Below Content Applies To: SharePoint Server 2016

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

[Online Version](http://technet.microsoft.com/EN-US/library/6dc6b5a5-56d9-4ae2-b0f4-f4cb85bc4dec(Office.15).aspx)

