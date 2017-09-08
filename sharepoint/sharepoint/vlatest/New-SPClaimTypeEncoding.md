---
external help file: sharepoint.xml
online version: 
schema: 2.0.0
---

# New-SPClaimTypeEncoding

## SYNOPSIS
Below Content Applies To: SharePoint Server 2013

## SYNTAX

```
New-SPClaimTypeEncoding -ClaimType <String> -EncodingCharacter <Char>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-Force] [-WhatIf]
```

## DESCRIPTION
Below Content Applies To: SharePoint Server 2013

Use the New-SPClaimTypeEncoding cmdlet to register the following:

For more information about the SPClaim methods and properties, see M:Microsoft.SharePoint.Administration.Claims.SPClaim.ToEncodedString and P:Microsoft.SharePoint.Administration.Claims.SPClaim.ClaimType respectively.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).
Below Content Applies To: SharePoint Server 2016

Use the New-SPClaimTypeEncoding cmdlet to register the following:

--A new type of claim
--The Unicode character to which it should be encoded when the SPClaim.ToEncodedString method is invoked
--The SPClaim.ClaimType property is set to a valid value

For more information about the SPClaim methods and properties, see M:Microsoft.SharePoint.Administration.Claims.SPClaim.ToEncodedString and P:Microsoft.SharePoint.Administration.Claims.SPClaim.ClaimType respectively.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------EXAMPLE------- (SharePoint Server 2013)
```
C:\PS>New-SPClaimTypeEncoding -EncodingCharacter '1' -ClaimType "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/country"
```

This example registers a new type of claim.

### ------------EXAMPLE------- (SharePoint Server 2016)
```
C:\PS>New-SPClaimTypeEncoding -EncodingCharacter '1' -ClaimType "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/country"
```

This example registers a new type of claim.

## PARAMETERS

### -ClaimType
Specifies the type of claim for which you want to create a mapping.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EncodingCharacter
Specifies the Unicode character to which you want to create a mapping.

```yaml
Type: Char
Parameter Sets: (All)
Aliases: 

Required: True
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

### -Force
Suppresses confirmation messages to any claim type that is added.

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

[Get-SPClaimTypeEncoding]()

