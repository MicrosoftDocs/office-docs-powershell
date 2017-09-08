---
external help file: sharepoint.xml
online version: http://technet.microsoft.com/EN-US/library/3abe030d-3b13-4b19-bbd7-4db87ca3c527(Office.15).aspx
schema: 2.0.0
---

# Set-SPEnterpriseSearchLinguisticComponentsStatus

## SYNOPSIS
Sets the operation status of the linguistic query and document processing components.

## SYNTAX

```
Set-SPEnterpriseSearchLinguisticComponentsStatus [-AllEnabled <Boolean>]
 [-AssignmentCollection <SPAssignmentCollection>] [-EntityExtractionEnabled <Boolean>]
 [-Identity <LinguisticComponentsStatusPipeBind>] [-QuerySpellingEnabled <Boolean>]
 -SearchApplication <SearchServiceApplicationPipeBind> [-StemmingEnabled <Boolean>]
 [-ThesaurusEnabled <Boolean>]
```

## DESCRIPTION
This cmdlet sets the operational status of the linguistic query and document processing components.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE 1----------------- (SharePoint Server 2013)
```
$searchApp = Get-SPEnterpriseSearchServiceApplicationSet-SpEnterpriseSearchLinguisticComponentsStatus -SearchApplication $searchApp -StemmingEnabled $false
```

This example shows how to disable stemming during query processing by setting the parameter StemmingEnabled to false.

### ------------------EXAMPLE 1----------------- (SharePoint Server 2016)
```
C:\PS>$searchApp = Get-SPEnterpriseSearchServiceApplication
Set-SpEnterpriseSearchLinguisticComponentsStatus -SearchApplication $searchApp -StemmingEnabled $false
```

This example shows how to disable stemming during query processing by setting the parameter StemmingEnabled to false.

### ------------------EXAMPLE 2----------------- (SharePoint Server 2013)
```
$searchApp = Get-SPEnterpriseSearchServiceApplicationSet-SpEnterpriseSearchLinguisticComponentsStatus -SearchApplication $searchApp -AllEnabled $false
```

This example shows how to disable all linguistic query and document processing functionalities.

### ------------------EXAMPLE 2----------------- (SharePoint Server 2016)
```
C:\PS>$searchApp = Get-SPEnterpriseSearchServiceApplication
Set-SpEnterpriseSearchLinguisticComponentsStatus -SearchApplication $searchApp -AllEnabled $false
```

This example shows how to disable all linguistic query and document processing functionalities.

## PARAMETERS

### -AllEnabled
Below Content Applies To: SharePoint Server 2013

{{Fill AllEnabled Description}} Below Content Applies To: SharePoint Server 2016

A Boolean value to enable or deactivate all linguistic functionalities.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

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

### -EntityExtractionEnabled
Below Content Applies To: SharePoint Server 2013

{{Fill EntityExtractionEnabled Description}} Below Content Applies To: SharePoint Server 2016

A Boolean value to enable or deactivate the company extractor and all custom extractors during document processing.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Below Content Applies To: SharePoint Server 2013

{{Fill Identity Description}} Below Content Applies To: SharePoint Server 2016

An object that represents the current status of the linguistic components.

```yaml
Type: LinguisticComponentsStatusPipeBind
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -QuerySpellingEnabled
Below Content Applies To: SharePoint Server 2013

{{Fill QuerySpellingEnabled Description}} Below Content Applies To: SharePoint Server 2016

A Boolean value to enable or deactivate query spelling correction.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SearchApplication
Below Content Applies To: SharePoint Server 2013

{{Fill SearchApplication Description}} Below Content Applies To: SharePoint Server 2016

Specifies the search service application that contains the linguistic processing components.

```yaml
Type: SearchServiceApplicationPipeBind
Parameter Sets: (All)
Aliases: 

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StemmingEnabled
Below Content Applies To: SharePoint Server 2013

{{Fill StemmingEnabled Description}} Below Content Applies To: SharePoint Server 2016

A Boolean value to enable or deactivate expansive stemming during query processing.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ThesaurusEnabled
Below Content Applies To: SharePoint Server 2013

{{Fill ThesaurusEnabled Description}} Below Content Applies To: SharePoint Server 2016

A Boolean value to enable or deactivate thesaurus lookup during query processing.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/3abe030d-3b13-4b19-bbd7-4db87ca3c527(Office.15).aspx)

[Get-SPEnterpriseSearchLinguisticComponentsStatus]()

