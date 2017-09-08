---
external help file: sharepoint.xml
online version: 
schema: 2.0.0
---

# Set-SPClaimProvider

## SYNOPSIS
Below Content Applies To: SharePoint Server 2013

## SYNTAX

```
Set-SPClaimProvider [-Identity] <SPClaimProviderPipeBind> [-AssignmentCollection <SPAssignmentCollection>]
 [-Default] [-Enabled]
```

## DESCRIPTION
The Set-SPClaimProvider cmdlet updates registration of a claims provider.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE------------------ (SharePoint Server 2013)
```
C:\PS>Set-SPClaimProvider -Identity "12345678-90ab-cdef-1234-567890bcdefgh"
```

This example turns off the specified claim provider.

### ------------------EXAMPLE------------------ (SharePoint Server 2016)
```
C:\PS>Set-SPClaimProvider -Identity "12345678-90ab-cdef-1234-567890bcdefgh"
```

This example turns off the specified claim provider.

## PARAMETERS

### -Identity
Specifies the claim provider to update.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of a claim provider (for example, MyClaimProvider1); or an instance of a valid SPClaimProvider object.

```yaml
Type: SPClaimProviderPipeBind
Parameter Sets: (All)
Aliases: 

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
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

### -Default
Specifies that the claim provider applies to all Web applications and zones.

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

### -Enabled
Turns on the claim provider.

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

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

