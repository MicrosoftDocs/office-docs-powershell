---
external help file: 
applicable: SharePoint Online
title: Get-SPOAppInfo
schema: 2.0.0
---

# Get-SPOAppInfo

## SYNOPSIS
Returns all installed applications.

## SYNTAX

```
Get-SPOAppInfo [[-ProductId] <Guid>] [[-Name] <String>] [<CommonParameters>]
```

## DESCRIPTION
The `Get-SPOAppInfo` cmdlet gets all the installed applications from an external marketplace or from the App Catalog that contain Name in their application names or the installed application with mentioned ProductId. ProductId takes precedence if not empty.

Either ProductId or Name must be given. Name is ignored if ProductId is specified. 

The returned collection of installed applications contains Product ID (GUID), Product name and Source. Values for source type are as follows: 0 = App Catalog and 1 = Marketplace.

You must be a SharePoint Online global administrator to run the cmdlet.

For permissions and the most current information about Windows PowerShell for SharePoint Online, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251832.


## EXAMPLES

###   ------------ Example 1 --------------------
```
Get-SPOAppInfo -Name "Excel Service"
```
Example 1 returns all the installed applications from the external marketplace or from the App Catalog that contain "Excel Service" in their application names.

###   ------------ Example 2 --------------------
```
Get-SPOAppInfo -ProductId 6751729b-e017-409d-681a-66f1dd18f0ff
```
Example 2 returns the installed application that has the GUID 6751729b-e017-409d-681a-66f1dd18f0ff. 

###   ------------ Example 3 --------------------
```
Get-SPOAppInfo -Name " " | Sort Name
```
Example 3 returns the installed application that have a space in the name and sorts the in ascending order. 

## REQUIRED PARAMETERS

### -Name
Specifies the application’s name.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProductId
Specifies the application’s GUID.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
