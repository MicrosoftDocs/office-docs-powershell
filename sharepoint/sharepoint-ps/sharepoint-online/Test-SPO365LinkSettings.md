---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: Test-SPO365LinkSettings
schema: 2.0.0
---

# Test-SPO365LinkSettings

## SYNOPSIS
Verifies the MySite host is correctly provisioned for hybrid.

## SYNTAX

```
Test-SPO365LinkSettings [-AssignmentCollection <SPAssignmentCollection>] -MySiteHostUrl <Uri>
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet verifies the MySite host is correctly provisioned for OneDrive hybrid by validating the site exists as well as validating the site uses the MySite Host template (SPSMSITEHOST#0).

## EXAMPLES

### ---------------EXAMPLE--------------
```
PS C:\>Test-SPO365LinkSettings -MySiteHostUrl https://my.contoso.com
```

Verifies that https://my.contoso.com exists and uses the correct site template. No output will be produced given the site is configured correctly.

## PARAMETERS

### -AssignmentCollection
Manages objects for the purpose of proper disposal. Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management. Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory. When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

**NOTE:** When the Global parameter is used, all objects are contained in the global store. If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur. 

```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -MySiteHostUrl
The full URL to the MySite host.

```yaml
Type: Uri
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

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
