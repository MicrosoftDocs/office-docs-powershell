---
external help file: sharepoint.xml
online version: 
schema: 2.0.0
---

# Set-SPTranslationServiceApplicationProxy

## SYNOPSIS
Sets properties to the Machine Translation service application proxy.

## SYNTAX

```
Set-SPTranslationServiceApplicationProxy [-Identity] <TranslationServiceApplicationProxyPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-DefaultProxyGroup] [-MaximumGroupSize <Int32>]
 [-MaximumItemCount <Int32>] [-WhatIf]
```

## DESCRIPTION
Use the Set-SPTranslationServiceApplicationProxy cmdlet to set properties on a Machine Translation service application proxy in the farm.

## EXAMPLES

### -------------EXAMPLE--------- (SharePoint Server 2013)
```
C:\PS>Set-SPTranslationServiceApplicationProxy TranslationServiceProxy -DefaultProxyGroup
```

This example adds the Machine Translation Service application proxy named TranslationServiceProxy to the default proxy group.

### -------------EXAMPLE--------- (SharePoint Server 2016)
```
C:\PS>Set-SPTranslationServiceApplicationProxy TranslationServiceProxy -DefaultProxyGroup
```

This example adds the Machine Translation Service application proxy named TranslationServiceProxy to the default proxy group.

## PARAMETERS

### -Identity
Specifies the GUID of the service application proxy.

The type must be a valid GUID in the form, 12345678-90ab-cdef-1234-567890bcdefgh.

```yaml
Type: TranslationServiceApplicationProxyPipeBind
Parameter Sets: (All)
Aliases: 

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
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

### -DefaultProxyGroup
Specifies that the Machine Translation Service application proxy be added to the default proxy group for the local farm.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaximumGroupSize
Maximum number of bytes the proxy will send to the service in a single request.
The valid values are 131072 to 10485760.
The default value is 2097152.

We do not recommend use of this parameter.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaximumItemCount
Maximum number of documents to be translated that the proxy will send to the service in a single request.
The valid values are 1 to 40960.
The default value is 9000.

We do not recommend use of this parameter.

```yaml
Type: Int32
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

[New-SPTranslationServiceApplication]()

[New-SPTranslationServiceApplicationProxy]()

[Set-SPTranslationServiceApplication]()

