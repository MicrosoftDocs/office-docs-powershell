---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
title: Test-SPO365LinkSettings
schema: 2.0.0
---

# Test-SPO365LinkSettings

## SYNOPSIS
Validates the OneDrive for Business hybrid configuration.

## SYNTAX

```
Test-SPO365LinkSettings [-AssignmentCollection <SPAssignmentCollection>] -MySiteHostUrl <Uri>
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet uses a REST API call to the on-premises MySite Host validating the MySite Host site template is SPSMSITEHOST#0 and that a valid OAuth token can be retrieved.

## EXAMPLES

### ---------------EXAMPLE--------------
```
PS C:\>Test-SPO365LinkSettings -MySiteHostUrl https://sharepoint-my.contoso.com
```

Validates the OneDrive for Business hybrid configuration using the MySite Host https://sharepoint-my.contoso.com.

## PARAMETERS

### -AssignmentCollection
Manages objects for the purpose of proper disposal. Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management. Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory. When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store. If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.


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

### -MySiteHostUrl
The URL of the on-premises MySite Host. This URL must point to a site that uses the SPS

```yaml
Type: Uri
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.Uri

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
