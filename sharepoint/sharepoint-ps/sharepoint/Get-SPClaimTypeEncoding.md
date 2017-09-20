---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# Get-SPClaimTypeEncoding

## SYNOPSIS

Returns a list of all the types of claims.



## SYNTAX

```
Get-SPClaimTypeEncoding [-AssignmentCollection <SPAssignmentCollection>] [-ClaimType <String>]
 [-EncodingCharacter <Char>] [<CommonParameters>]
```

## DESCRIPTION

Use the Get-SPClaimTypeEncoding cmdlet to return the following:

-- A list of all the types of claims that are registered in the farm
-- The Unicode character that will be encoded when the SPClaim.ToEncodedString method is invoked
-- The SPClaim.ClaimType property is set to a valid value

For additional information about the SPClaim methods and properties, see M:Microsoft.SharePoint.Administration.Claims.SPClaim.ToEncodedString and P:Microsoft.SharePoint.Administration.Claims.SPClaim.ClaimType respectively.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).



## EXAMPLES

### --------------EXAMPLE 1-------- 
```
C:\PS>Get-SPClaimTypeEncoding
```

This example returns a list of all types of claima in the farm.

### --------------EXAMPLE 2-------- 
```
C:\PS>Get-SPClaimTypeEncoding -ClaimType "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/country"
```

This example returns a specific claim type by using the ClaimType parameter.

## PARAMETERS

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
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -ClaimType
Specifies an encoding character that is mapped to a type of input claim.

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

### -EncodingCharacter
Specifies a type of claim that is mapped to an input character.

```yaml
Type: Char
Parameter Sets: (All)
Aliases: 
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

[New-SPClaimTypeEncoding]()

