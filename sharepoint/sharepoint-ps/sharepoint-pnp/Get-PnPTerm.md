---
external help file:
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
schema: 2.0.0
---
# Get-PnPTerm

## SYNOPSIS
Returns a taxonomy term

## SYNTAX 

### 
```powershell
Get-PnPTerm -TermSet <Id, Title or TaxonomyItem>
            -TermGroup <Id, Title or TermGroup>
            [-Includes <String[]>]
            [-Identity <Id, Name or Object>]
            [-TermStore <Id, Name or Object>]
            [-Recursive [<SwitchParameter>]]
            [-Connection <SPOnlineConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPTerm -TermSet "Departments" -TermGroup "Corporate"
```

Returns all term in the termset "Departments" which is in the group "Corporate" from the site collection termstore

### ------------------EXAMPLE 2------------------
```powershell
Get-PnPTerm -Identity "Finance" -TermSet "Departments" -TermGroup "Corporate"
```

Returns the term named "Finance" in the termset "Departments" from the termgroup called "Corporate" from the site collection termstore

### ------------------EXAMPLE 3------------------
```powershell
Get-PnPTerm -Identity ab2af486-e097-4b4a-9444-527b251f1f8d -TermSet "Departments" -TermGroup "Corporate"
```

Returns the term named with the given id, from the "Departments" termset in a term group called "Corporate" from the site collection termstore

### ------------------EXAMPLE 4------------------
```powershell
Get-PnPTerm -Identity "Small Finance" -TermSet "Departments" -TermGroup "Corporate" -Recursive
```

Returns the term named "Small Finance", from the "Departments" termset in a term group called "Corporate" from the site collection termstore even if it's a subterm below "Finance"

## PARAMETERS

### -Identity
The Id or Name of a Term

```yaml
Type: Id, Name or Object
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Includes
Specify properties to include when retrieving objects from the server.

```yaml
Type: String[]
Parameter Sets: (All)

Required: False
Position: 0
Accept pipeline input: False
```

### -Recursive
Find the first term recursivly matching the label in a term hierarchy.

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -TermGroup
Name of the termgroup to check.

```yaml
Type: Id, Title or TermGroup
Parameter Sets: (All)

Required: True
Position: 0
Accept pipeline input: True
```

### -TermSet
Name of the termset to check.

```yaml
Type: Id, Title or TaxonomyItem
Parameter Sets: (All)

Required: True
Position: 0
Accept pipeline input: True
```

### -TermStore
Term store to check; if not specified the default term store is used.

```yaml
Type: Id, Name or Object
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Connection
Optional connection to be used by the cmdlet. Retrieve the value for this parameter by either specifying -ReturnConnection on Connect-PnPOnline or by executing Get-PnPConnection.

```yaml
Type: SPOnlineConnection
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## OUTPUTS

### Microsoft.SharePoint.Client.Taxonomy.Term

## RELATED LINKS

[SharePoint Developer Patterns and Practices](http://aka.ms/sppnp)