---
Module Name: PnP.PowerShell
schema: 2.0.0
applicable: SharePoint Online
online version: https://pnp.github.io/powershell/cmdlets/Add-PnPFieldFromXml.html
external help file: PnP.PowerShell.dll-Help.xml
title: Add-PnPFieldFromXml
---
  
# Add-PnPFieldFromXml

## SYNOPSIS

> [!TIP]
> We encourage you to make improvements to this documentation. Please navigate to https://github.com/pnp/powershell/blob/dev/documentation/Add-PnPFieldFromXml.md to change this file.

Adds a field to a list or as a site column based upon a CAML/XML field definition

## SYNTAX

```powershell
Add-PnPFieldFromXml [-List <ListPipeBind>] [-FieldXml] <String> 
 [-Connection <PnPConnection>] [<CommonParameters>]
```

## DESCRIPTION

## EXAMPLES

### EXAMPLE 1
```powershell
$xml = '<Field Type="Text" Name="PSCmdletTest" DisplayName="PSCmdletTest" ID="{27d81055-f208-41c9-a976-61c5473eed4a}" Group="Test" Required="FALSE" StaticName="PSCmdletTest" />'
Add-PnPFieldFromXml -FieldXml $xml
```

Adds a field with the specified field CAML code to the site.

### EXAMPLE 2
```powershell
$xml = '<Field Type="Text" Name="PSCmdletTest" DisplayName="PSCmdletTest" ID="{27d81055-f208-41c9-a976-61c5473eed4a}" Group="Test" Required="FALSE" StaticName="PSCmdletTest" />'
Add-PnPFieldFromXml -List "Demo List" -FieldXml $xml
```

Adds a field with the specified field CAML code to the list "Demo List".

## PARAMETERS

### -Connection
Optional connection to be used by the cmdlet. Retrieve the value for this parameter by either specifying -ReturnConnection on Connect-PnPOnline or by executing Get-PnPConnection.

```yaml
Type: PnPConnection
Parameter Sets: (All)

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FieldXml
CAML snippet containing the field definition. See http://msdn.microsoft.com/en-us/library/office/ms437580(v=office.15).aspx

```yaml
Type: String
Parameter Sets: (All)

Required: True
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -List
The name of the list, its ID or an actual list object where this field needs to be added

```yaml
Type: ListPipeBind
Parameter Sets: (All)

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```



## RELATED LINKS

[Microsoft 365 Patterns and Practices](https://aka.ms/m365pnp)[Field CAML](http://msdn.microsoft.com/en-us/library/office/ms437580(v=office.15).aspx)


